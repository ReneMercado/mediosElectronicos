import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitaService } from '../../services/visita/visita.service';
import { Visita } from '../../models/visita.model';
import { RespuestasCuestionarios } from '../../models/respuestasCuestionarios.model';
declare var google: any;

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styles: []
})
export class VisitDetailComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 25.655592;
  lng: number = -100.365927;
  visita: Visita = new Visita();
  latReal: number = 0;
  lngReal: number = 0;
  fotos = [];
  cuestionario: RespuestasCuestionarios = new RespuestasCuestionarios();
  tipoVisita: string = '';

  constructor(private route: ActivatedRoute, public _visitaService: VisitaService) {
    this.route.queryParams.subscribe(params => {

      let visita = new Visita(params.Id_Visita);
      this._visitaService.getVisit(visita).subscribe(async resp => {

        resp = Object.assign(new Visita, resp);
        Object.setPrototypeOf(resp, Visita.prototype);
        this.visita = resp;
        this.lat = +this.visita.Latitud;
        this.lng = +this.visita.Longitud;
        this.tipoVisita = this.visita.TipoVisita;

        this.fotos = await this._visitaService.getPhotos(this.visita.Id_Visita);
        this.fotos.forEach(element => {
          element.Foto = 'data:image/png;base64,' + element.Foto;
        });

        this.cuestionario.setObject((await this._visitaService.getQuestionary(this.visita))[0] || {});
        console.log(this.cuestionario);
        this.latReal = +this.cuestionario.Latitud;
        this.lngReal = +this.cuestionario.Longitud;
      });
    });
  }

  ngOnInit() {
  }

}
