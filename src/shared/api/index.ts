import axios from 'axios';
import {config} from '@shared/config';

const http = axios.create({
  baseURL: config.api.baseURL,
  params: {
    apikey: config.api.apiKey,
  },
  headers: {
    'Content-Type:': 'application/json',
  },
});

export {http};
