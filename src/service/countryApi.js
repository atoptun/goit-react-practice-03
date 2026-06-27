import axios from 'axios';

import {
  transformCountriesData,
  // transformCountryData,
} from '../helpers/transformCountries';

const API_KEY = import.meta.env.VITE_API_KEY;
const client = axios.create({
  baseURL: 'https://api.restcountries.com/countries/v5',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// axios.defaults.baseURL = 'https://api.restcountries.com/countries/v5';

export const fetchCountries = async region => {
  const { data } = await client.get('', {
    params: {
      response_fields:
        'names.common,flag,region,capitals,population,languages,links,uuid',
      region: region || 'Europe',
      limit: 100,
    },
  });
  const countries = transformCountriesData(data.data.objects);
  return countries;
};

export const fetchCountry = async name => {
  const { data } = await client.get(`/names.common/${name}`, {
    params: {
      response_fields:
        'names.common,flag,region,capitals,population,languages,links,uuid',
      region: 'Europe',
      limit: 1,
    },
  });
  if (
    !data ||
    !data.data ||
    !data.data.objects ||
    data.data.objects.length === 0
  ) {
    throw new Error(`Country with name "${name}" not found.`);
  }
  const countries = transformCountriesData(data.data.objects);

  return countries[0];
};
