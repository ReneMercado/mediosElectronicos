import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  showModal = false;

  constructor() { }

  hide() {
    this.showModal = false;
  }

  show() {
    this.showModal = true;
  }
}
