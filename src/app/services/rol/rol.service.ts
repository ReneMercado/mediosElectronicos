import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(
    public http: HttpClient,
    public router: Router) { }


  async getRoles() {
    try {
      const url = URL_SERVICIOS + '/Roles';
      return await this.http.get(url)
        .map((resp: any) => {
          return resp.data;
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }
}
