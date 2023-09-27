import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_dOJ39ImEqWH3cF1jUJI4PMe7tAnZXHOkINz33Hfe1NJ2IErVO1ESFhxy6AB6WCAO";
import {fetchBreeds, fetchCatByBreed} from './cat-api'

export const breedSelect = document.querySelector('.breed-select');

export const infoLoader = document.querySelector('.loader');
export const selectError = document.querySelector('.error');
export const catInfo = document.querySelector('.cat-info');

window.addEventListener('load', init);

function init(){
    selectError.style.display = 'none';
    infoLoader.style.display = 'none';
    let breedsData;
    fetchBreeds()
    .then(data => {
        breedsData = data;
        data.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
          })
    })
    breedSelect.addEventListener('change', () => {
        const selectBreedId = breedSelect.value;
        infoLoader.style.display = 'block';

        fetchCatByBreed(selectBreedId)
        .then(result => {
            const catData = result[0];
            const breedData = breedsData.find(breed => breed.id === catData.breeds[0].id);

            const markup = createMarkup(catData, breedData);
            catInfo.innerHTML = markup;
        })
    });
}

        function createMarkup(catData, breedData){
        return `<img src='${catData.url}' width='300' alt='${breedData.name}'/>
        <div class='textInfo'><h1>${breedData.name}</h1>
        <p>${breedData.description}</p>
        <p><b>Temperament:</b> ${breedData.temperament}</p></div>`
    }