// Cache DOM elements
const breedSelectEl = document.querySelector(".breed-select");
const catInfoEl = document.querySelector(".cat-info");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");

errorEl.classList.add("is-hidden");

// API URLs
const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_hgVLmozRnWu8KA5AwXcTnQHagnoN82mIVmdHKvikbJsJw7KLhHIWKYVzJ3B5sXy5";
const breedsURL = `${BASE_URL}/breeds?api_key=${API_KEY}`;

// Load breeds when the page loads
document.addEventListener("DOMContentLoaded", chooseBreed);

// Function to fetch breeds
function fetchBreeds() {
    return fetch(breedsURL)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching breeds: ${res.status}`);
            }
            return res.json();
        });
}

// Function to fetch cat by breed
function fetchCatByBreed(breedId) {
    const catByBreedURL = `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
    return fetch(catByBreedURL)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching cat by breed: ${res.status}`);
            }
            return res.json();
        });
}

// Function to handle breed selection change
function handleBreedChange(e) {
    loaderEl.classList.replace("is-hidden", "loader");
    catInfoEl.classList.add("is-hidden");
    const breedId = e.target.value;
    fetchCatByBreed(breedId)
        .then(data => {
            const { url, breeds } = data[0];
            const { name, description, temperament } = breeds[0];
            catInfoEl.innerHTML = `
                <img src="${url}" alt="${name}" width="400"/>
                <div class="box">
                    <h2>${name}</h2>
                    <p>${description}</p>
                    <p>${temperament}</p>
                </div>
            `;
            catInfoEl.classList.remove("is-hidden");
            loaderEl.classList.add("is-hidden");
        })
        .catch(onError);
}

// Function to handle error
function onError(error) {
    errorEl.textContent = `Error: ${error.message}`;
    errorEl.classList.remove("is-hidden");
    breedSelectEl.classList.add("is-hidden");
}

// Function to populate breed options
function populateBreeds(data) {
    loaderEl.classList.replace("loader", "is-hidden");
    const optionsMarkup = data.map(({ name, id }) => `<option value="${id}">${name}</option>`).join("");
    breedSelectEl.insertAdjacentHTML("beforeend", optionsMarkup);
    breedSelectEl.classList.remove("is-hidden");
}

// Function to load breeds
function chooseBreed() {
    fetchBreeds()
        .then(populateBreeds)
        .catch(onError);
}

// Event listener for breed selection change
breedSelectEl.addEventListener("change", handleBreedChange);

