import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_dOJ39ImEqWH3cF1jUJI4PMe7tAnZXHOkINz33Hfe1NJ2IErVO1ESFhxy6AB6WCAO";
import {fetchBreeds, fetchCatByBreed} from './cat-api'

const breedSelect = document.querySelector('.breed-select');
breedSelect.style.width = '200px';
breedSelect.style.height = '25px';

const infoLoader = document.querySelector('.loader');
const selectError = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedSelect.addEventListener('change', fetchCatByBreed);
window.addEventListener('load', fetchBreeds);