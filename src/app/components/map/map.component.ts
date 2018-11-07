import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: []
})
export class MapComponent implements OnInit {

  markers = [];
  @Input() lat: Number = 25.654602; // Ubicación default del mapa
  @Input() lng: Number = -100.362116; // Ubicación default del mapa
  @Input() addMarkersOnClick = 'false';
  @Input() zoom: Number = 15;


  constructor() { }

  ngOnInit() {
  }

  addMarker(marker) {
    this.markers.push(marker);
  }

  onClickMap(event) {

    const coords: { lat: number, lng: number } = event.coords;
    if (this.addMarkersOnClick === 'true') {
      let marker = {
        lat: coords.lat,
        lng: coords.lng,
        titulo: 'Titulo Nuevo'
      };

      this.addMarker(marker);
    }

  }
}
