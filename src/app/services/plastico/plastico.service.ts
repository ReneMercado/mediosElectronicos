import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/loader/loader.service';
import { CargaMasiva } from '../../models/cargaMasiva.model';

@Injectable({
  providedIn: 'root'
})
export class PlasticoService {

  constructor(
    public http: HttpClient,
    public router: Router,
    public loader: LoaderService
  ) { }

  async crearPlasticosMasiva(carga: CargaMasiva) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/AltaMasivaPlasticos';
      carga.Usuario_Id = +localStorage.getItem('id');
      return await this.http.post(url, carga)
        .map((resp: any) => {
          if (resp.Exito === 1) {
            swal('Exito', resp.Err_Mensaje, 'success');
            return resp;
          } else {
            swal('Error', resp.Err_Mensaje, 'error');
            return resp;
          }
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }
}
