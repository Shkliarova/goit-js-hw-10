const api_key = "live_dOJ39ImEqWH3cF1jUJI4PMe7tAnZXHOkINz33Hfe1NJ2IErVO1ESFhxy6AB6WCAO";
const base_url = "https://api.thecatapi.com/v1/"

export function fetchBreeds(){
    return fetch(`${base_url}breeds?api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
}

export function fetchCatByBreed(breedId){
    return fetch(`${base_url}images/search?breed_ids=${breedId}&api_key=${api_key}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
}