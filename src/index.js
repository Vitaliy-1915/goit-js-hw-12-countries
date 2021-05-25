import "./sass/main.scss";
import debounce from 'lodash.debounce';
import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import templatesCountryCard from './templates/country-card.hbs';
import templatesCountryList from './templates/country-list.hbs';
import fetchCountries from './js/axiosCountries.js';


const cardContainerEL = document.querySelector('.js-card-container');
const inputSearchEl = document.querySelector('.input-search');

let inputCountryToSearch = '';

function onResultSearchCountry(country) {
    if (country.length > 10) {
        clearMarkup();
        tooManyCountry();
        
    } else if (country.length <= 10 && country.length > 1) {
        clearMarkup();
        fetchCountries(inputSearchEl.value).then(renderCountryList).catch(onResultSearchError);
        return
        
    } else if (country.length === 1) {
        clearMarkup();
        fetchCountries(inputSearchEl.value).then(renderCountryCard).catch(onResultSearchError);
        return
    } else {
        clearMarkup();
        onResultSearchError()
    }
}
  
inputSearchEl.addEventListener('input', debounce(() => {
    onSearch();
  }, 500),
);

function onSearch() {
    inputCountryToSearch = inputSearchEl.value;

    if (!inputCountryToSearch) {
        clearMarkup();
        return;
    }
    fetchCountries(inputSearchEl.value).then(onResultSearchCountry).catch(onResultSearchError);
};

function renderCountryList(country) {
    const markup = templatesCountryList(country);
    cardContainerEL.insertAdjacentHTML('beforeend', markup);
}

function renderCountryCard(country)  {
    const markup = templatesCountryCard(country);
    cardContainerEL.insertAdjacentHTML('beforeend', markup);
};

function clearMarkup() {
    cardContainerEL.innerHTML = '';
}


function onResultSearchError() {
    error({
        text: 'No matches found',
        hide: true,
        delay: 5000,
        width: '1000px',
        minHeight: '100px',
});
}

function tooManyCountry() {
  alert({
    text: 'Please enter a more specific query!',
    delay: 5000,
      hide: true,
      width: '1000px',
      minHeight: '100px',
  });
}


