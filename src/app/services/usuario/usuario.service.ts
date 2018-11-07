import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;
  menu: any[] = [];

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    // this.cargarStorage();
  }


  getUsers() {
    let filtros = {

    };
    const url = URL_SERVICIOS + '/ConsultaUsuarios';
    return this.http.post(url, filtros)
      .map((resp: any) => {
        return resp.Table;
      })
      .catch((err) => {
        console.log(err);
        swal('Error', err.message);
        return Observable.throw(err);
      });
  }

  async getUser(nombre: string) {
    try {
      const url = URL_SERVICIOS + '/ConsultaUsuario';
      return await this.http.get(url, { params: { 'NomUsuario': nombre } })
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }

  async createUser(usuario: Usuario) {
    try {
      const url = URL_SERVICIOS + '/AltaUsuario';
      return await this.http.post(url, usuario)
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }

  async updateUser(usuario: Usuario) {
    try {
      const url = URL_SERVICIOS + '/ActualizaUsuarios';
      return await this.http.post(url, usuario)
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    }
  }

  estaLogueado() {
    // return (this.token.length > 5) ? true : false;
    return true;
  }

  cargarStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      // this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      // this.usuario = null;
      this.menu = [];
    }

  }

  logout() {
    // this.usuario = null;
    this.token = '';
    this.menu = [];

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('menu');

    this.router.navigate(['/login']);
  }


}
