import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.eu';

const fetchCountries = (name) => {
    let params = '/rest/v2/name/?{name}';
    return axios.get(params)
        .then(response => response = response.data)
   
};

export default fetchCountries;