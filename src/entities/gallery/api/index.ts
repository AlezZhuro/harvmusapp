import {http} from '@shared/api';
import {GalleryListItem} from '..';

export const getAll = async (params?: Record<string, string | number>) => {
  try {
    const res = await http.get<GetAll<GalleryListItem>>('/gallery', {
      params: params,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const getOne = async (params: Record<string, string | number>) => {
  return await http.get('/object', params);
};

type RequestInfo = {
  info: {
    totalrecordsperquery: number;
    totalrecords: number;
    pages: number;
    page: number;
    next: string; //"https://api.harvardartmuseums.org/gallery?floor=2&size=10&page=2",
    responsetime: string;
  };
};

type RequestData<T> = {
  records: T[];
};

type GetAll<T> = RequestInfo & RequestData<T>;

export type GalleryObject = {
  accessionmethod: 'Purchase';
  accessionyear: 2007;
  accesslevel: 1;
  century: '21st century';
  classification: 'Sculpture';
  classificationid: 30;
  colorcount: 10;
  colors: [
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
  ];
  commentary: null;
  contact: 'am_moderncontemporary@harvard.edu';
  contextualtextcount: 0;
  copyright: '© Leonardo Drew. Courtesy of Sikkema Jenkins & Co.';
  creditline: 'Harvard Art Museums/Fogg Museum, Purchase through the generosity of Deborah and Martin Hale and Richard Norton Memorial Fund';
  culture: 'American';
  datebegin: 2007;
  dated: '2007';
  dateend: 2007;
  dateoffirstpageview: '2009-07-23';
  dateoflastpageview: '2023-06-21';
  department: 'Department of Modern & Contemporary Art';
  description: null;
  dimensions: '';
  division: 'Modern and Contemporary Art';
  edition: null;
  exhibitioncount: 3;
  groupcount: 0;
  id: 320268;
  imagecount: 13;
  imagepermissionlevel: 0;
  images: [
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
    [Object],
  ];
  labeltext: null;
  lastupdate: '2023-06-22T05:34:24-0400';
  lendingpermissionlevel: 0;
  markscount: 0;
  mediacount: 0;
  medium: 'Wood, paint, collage, paper and branches';
  objectid: 320268;
  objectnumber: '2007.209';
  people: [[Object]];
  peoplecount: 1;
  period: null;
  periodid: null;
  primaryimageurl: 'https://nrs.harvard.edu/urn-3:huam:DDC111822_dynmc';
  provenance: '[Sikkema Jenkins & Co., New York, New York], sold; to Harvard University Art Museums, 2007.';
  publicationcount: 2;
  rank: 131408;
  relatedcount: 12;
  seeAlso: [[Object]];
  signed: null;
  standardreferencenumber: null;
  state: null;
  style: null;
  technique: null;
  techniqueid: null;
  title: 'Number 122';
  titlescount: 1;
  totalpageviews: 261;
  totaluniquepageviews: 223;
  url: 'https://www.harvardartmuseums.org/collections/object/320268';
  verificationlevel: 3;
  verificationleveldescription: 'Good. Object is well described and information is vetted';
  worktypes: [[Object]];
};
