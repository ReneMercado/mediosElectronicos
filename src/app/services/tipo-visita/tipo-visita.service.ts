import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';
import { TipoVisita } from '../../models/tipo-visita.model';

@Injectable({
  providedIn: 'root'
})
export class TipoVisitaService {

  constructor(
    public http: HttpClient,
    public router: Router) { }

  getVisitTypes() {
    const url = URL_SERVICIOS + '/TipoVisita';
    return this.http.get(url)
      .map((resp: TipoVisita[]) => {
        return resp.filter((visitType: TipoVisita, index) => {
          if ((visitType.TipoVisita === 'ESPECIAL') || (visitType.TipoVisita === 'COBRANZA')) {
            return true;
          } else {
            return false;
          }
        });
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }
}
