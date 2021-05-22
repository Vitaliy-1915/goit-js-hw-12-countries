import debounce from 'lodash.debounce';
import axios from 'axios';

axios.get('https://restcountries.eu/rest/v2/name/eesti')
    .then(response =>
        // handle success
        console.log(response))
    .catch(error =>
        // handle error
        console.log(error));