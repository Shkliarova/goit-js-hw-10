import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_dOJ39ImEqWH3cF1jUJI4PMe7tAnZXHOkINz33Hfe1NJ2IErVO1ESFhxy6AB6WCAO";
import {fetchBreeds, fetchCatByBreed} from './cat-api'

export const breedSelect = document.querySelector('.breed-select');
breedSelect.style.width = '200px';
breedSelect.style.height = '25px';

const infoLoader = document.querySelector('.loader');
const selectError = document.querySelector('.error');
export const catInfo = document.querySelector('.cat-info');

window.addEventListener('load', init);

function init(){
    fetchBreeds();
    breedSelect.addEventListener('change', () => {
        const selectBreedId = breedSelect.value;
        fetchCatByBreed(selectBreedId);
    });
}

export function createMarkup(arr){
    return arr.map(({url, name, description, temperament}) => {
        return `<img src='${url}' width='300' alt='${name}'/>
        <h1>${name}</h1>
        <p>${description}</p>
        <p><b>Temperament:</b> ${temperament}</p>`
    }).join('');
}