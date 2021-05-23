import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.eu';

const fetchCountries = () => {
    return axios.get('/rest/v2/name/uk')
    .then(response => response = response.data)
};

export default fetchCountries;