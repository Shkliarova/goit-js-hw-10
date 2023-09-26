import { breedSelect, catInfo, createMarkup } from "./index.js";

export function fetchBreeds(){
    return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
          })
          return data;
    })
    .catch(error => {
        console.log(error);
    })
}

export function fetchCatByBreed(breedId){
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(result => {
        const markup = createMarkup(result);
        catInfo.innerHTML = markup;
    })
    .catch(error => {
        console.log(error);
    })
}