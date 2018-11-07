import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(public http: HttpClient,
    public router: Router) { }

  async getSucursales() {
    try {
      const url = URL_SERVICIOS + '/Sucursales';
      return await this.http.get(url)
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }
}
