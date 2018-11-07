import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Visita } from '../../models/visita.model';
import { CargaMasivaVisita } from '../../models/cargaMasivaVisita.model';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(
    public http: HttpClient,
    public router: Router) { }

  getVisits(visit) {
    const url = URL_SERVICIOS + '/ConsultaVisitasFiltros';
    return this.http.post(url, visit)
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }

  getVisit(visit: Visita) {
    const url = URL_SERVICIOS + '/ConsultaDetalleInfoVisita';
    return this.http.post(url, visit)
      .map((resp: any) => {
        return resp.Table[0];
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }

  async uploadCreateVisits(carga: CargaMasivaVisita) {
    try {
      const url = URL_SERVICIOS + '/AltaMasivaVisitas';
      return await this.http.post(url, carga)
        .map((resp: any) => {
          if (resp.Exito === 1) {
            swal('Error', resp.Err_Mensaje);
            return resp;
          } else {
            swal('Error', resp.Err_Mensaje);
            throw resp;
          }
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }

  async getQuestionary(visit: Visita) {
    try {
      const url = URL_SERVICIOS + '/ConsultaCuestionario';
      return await this.http.post(url, visit)
        .map((resp: any) => {
          return resp.Table;
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }

  async getPhotos(Id_Visita: Number) {
    try {
      const url = URL_SERVICIOS + '/ConsultaFotos?Id_Visita=' + Id_Visita;
      return await this.http.post(url, null)
        .map((resp: any) => {
          return resp.Table;
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }
}
