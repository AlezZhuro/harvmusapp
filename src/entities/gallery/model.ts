import {makeAutoObservable} from 'mobx';
import {getAll} from './api';

class Gallery {
  previewList: GalleryListItem[] = [];

  list: any[] = [];
  openedItem = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setPreviewList(list: GalleryListItem[]) {
    this.previewList = list;
  }

  getPreviewList(): GalleryListItem[] {
    return this.previewList;
  }

  setList(list: any[]) {
    this.list = list;
  }

  getList(): any[] {
    return this.list;
  }

  setOpenedItem(item: any) {
    this.openedItem = item;
  }
  getOpenedItem() {
    return this.openedItem;
  }

  async fetchPreviewList() {
    const list = await getAll();
    list && this.setPreviewList(list?.records);
  }
}

export const galleryModel = new Gallery();

export type GalleryListItem = {
  gallerynumber: string;
  labeltext: string | null;
  objectcount: number;
  galleryid: number;
  name: string;
  theme: string | null;
  id: number;
  lastupdate: Date;
  floor: number;
  url: string;
};
