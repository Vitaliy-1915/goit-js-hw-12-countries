import "./sass/main.scss";
import debounce from 'lodash.debounce';
import { alert, error } from '@pnotify/core';
import templatesCountryCard from './templates/country-card.hbs';

import fetchCountries from './js/axiosCountries.js';

const cardContainerEL = document.querySelector('.js-card-container')

const renderCountryList = country => {
    const markup = templatesCountryCard(country);
    cardContainerEL.insertAdjacentHTML('beforeend', markup);
}

fetchCountries().then(renderCountryList);



