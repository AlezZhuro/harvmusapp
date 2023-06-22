import axios from 'axios';
import {config} from '@shared/config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const museumAppRequests = {
  museumInfo: {
    getMuseumInfo: {
      method: 'GET',
      url: '/museum',
    },
  },
  mainMenu: {
    getExhibitions: {
      method: 'GET',
      url: '/exhibitions',
    },
  },
  galleriesAndExhibitions: {
    getGalleries: {
      method: 'GET',
      url: '/galleries',
    },
    getGallery: {
      method: 'GET',
      url: '/gallery/{gallery_id}',
    },
    getExhibition: {
      method: 'GET',
      url: '/exhibition/{exhibition_id}',
    },
  },
  objects: {
    getObjects: {
      method: 'GET',
      url: '/objects',
    },
    getObject: {
      method: 'GET',
      url: '/object/{object_id}',
    },
  },
  audioAndVideoGuides: {
    getExhibitionAudioGuide: {
      method: 'GET',
      url: '/exhibition/{exhibition_id}/audio',
    },
    getObjectAudioGuide: {
      method: 'GET',
      url: '/object/{object_id}/audio',
    },
  },
  visitorInteraction: {
    getComments: {
      method: 'GET',
      url: '/comments',
    },
    addComment: {
      method: 'POST',
      url: '/comments',
    },
  },
  additionalFeatures: {
    getOpeningHours: {
      method: 'GET',
      url: '/hours',
    },
    getTicketPrices: {
      method: 'GET',
      url: '/prices',
    },
    getWebsiteLink: {
      method: 'GET',
      url: '/website',
    },
    getShopLink: {
      method: 'GET',
      url: '/shop',
    },
  },
};

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
