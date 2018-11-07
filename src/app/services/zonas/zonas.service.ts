import { Injectable } from '@angular/core';
// import { Usuario } from '../../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Usuariocp } from '../../models/usuariocp.model';



@Injectable()
export class ZonasService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    // this.cargarStorage();
  }

  getEstados() {
    const url = URL_SERVICIOS + '/Estados';
    return this.http.get(url)
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }

  getAgentes() {
    const url = URL_SERVICIOS + '/Agentes';
    return this.http.get(url)
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }


  getMunicipios(Id_Estado) {
    const url = URL_SERVICIOS + '/MunicipiosPorEstado?Id_Estado=' + Id_Estado;
    return this.http.post(url, {})
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }

  getCPMunicipio(Id_Ciudad) {
    const url = URL_SERVICIOS + '/CPMunicipio?Id_Ciudad=' + Id_Ciudad;
    return this.http.post(url, {})
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }

  CPUsuario(Id_Usuario) {
    const url = URL_SERVICIOS + '/CPUsuario?Id_Usuario=' + Id_Usuario;
    return this.http.post(url, {})
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }

  AsignacionCPUsuario(obj: Usuariocp) {
    const url = URL_SERVICIOS + '/AsignacionCPUsuario';
    return this.http.post(url, obj)
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }


  DesasociacionCPUsuario(obj: Usuariocp) {
    const url = URL_SERVICIOS + '/DesasociacionCPUsuario';
    return this.http.post(url, obj)
      .map((resp: any) => {
        return resp;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }


}
