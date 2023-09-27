import { infoLoader, selectError, breedSelect, catInfo } from "./index.js";
const api_key = "live_dOJ39ImEqWH3cF1jUJI4PMe7tAnZXHOkINz33Hfe1NJ2IErVO1ESFhxy6AB6WCAO";

export function fetchBreeds(){
    breedSelect.style.display = 'none';
    infoLoader.style.display = 'block';
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
    .catch(error => {
        console.log(error);
        selectError.style.display = 'block';
    })
    .finally(() => {
        infoLoader.style.display = 'none';
        breedSelect.style.display = 'block';
    })
}

export function fetchCatByBreed(breedId){
    catInfo.style.display = 'none';
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
    .catch(error => {
        console.log(error);
        selectError.style.display = 'block';
    })
    .finally(() => {
        infoLoader.style.display = 'none';
        catInfo.style.display = 'flex';
    })
}