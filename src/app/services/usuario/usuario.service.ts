import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { URL_SERVICIOS, URL_SERVER } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { LoaderService } from '../../shared/loader/loader.service';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;
  menu: any[] = [];

  constructor(
    public http: HttpClient,
    public router: Router,
    public loader: LoaderService
  ) {
    this.cargarStorage();
  }

  guardarStorage(userName: string, id: string, token: string, usuario: Usuario, area_Id: string,
    fechaUltAcceso: string, lugarSucursal: string, rol_Id: string) {

    localStorage.setItem('id', id);
    localStorage.setItem('userName', userName);
    localStorage.setItem('access_token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('Area_Id', area_Id);
    localStorage.setItem('FechaUltAcceso', fechaUltAcceso);
    localStorage.setItem('LugarSucursal', lugarSucursal);
    localStorage.setItem('Rol_Id', rol_Id);

    this.usuario = usuario;
    this.token = token;
  }


  async getUsers() {
    try {
      this.loader.show();
      let filtros = {

      };
      const url = URL_SERVICIOS + '/ConsultaUsuarios';
      return await this.http.post(url, filtros)
        .map((resp: any) => {
          return resp.Table;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  // getSyncronousUsers() {
  //   let filtros = {

  //   };
  //   const url = URL_SERVICIOS + '/ConsultaUsuarios';
  //   return this.http.post(url, filtros)
  //     .map((resp: any) => {
  //       return resp.Table;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       swal('Error', err.message, 'error');
  //       return Observable.throw(err);
  //     });
  // }

  // ejempli() {
  // ------------------ Importar _usuarioService en constructor ---------------
  // this._usuarioService.getSyncronousUsers().subscribe((resp: any) => {

  //   if (resp.length === 0) {
  //     console.log('No hay usuarios!');
  //   }

  //   this.usuarios = resp;
  // });
  // }

  async getUser(nombre: string) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/ConsultaUsuario';
      return await this.http.get(url, { params: { 'NomUsuario': nombre } })
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async createUser(usuario: Usuario) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/AltaUsuario';
      return await this.http.post(url, usuario)
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async updateUser(usuario: Usuario) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/ActualizaUsuarios';
      return await this.http.post(url, usuario)
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async getUsersLoggedInToday() {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/MovilUsuariosConectadosDiaActual';
      return await this.http.get(url)
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async loginToken(username, password) {
    try {
      this.loader.show();
      // Genera los parametros en tipo de contenido application/x-www-form-urlencoded
      let body = `username=${username}&password=${password}&grant_type=password`;

      const url = URL_SERVER + '/Login';
      return await this.http.post(url, body)
        .map((resp: any) => {
          console.log('Llama loginToken');
          this.guardarStorage(username, resp.idUsuario, resp.access_token, null, '', '', '', '');
          return resp;
        }).toPromise();
    } catch (e) {
      // Cuando falla puede ser por usuairo bloqueado o por contraseña o usuario incorrecto
      e.Err_Mensaje = 'Usuario ó Password Incorrecto.';
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async loginUser(username, password) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + `/Login?Usu=${username}&Pwd=${password}`;

      return await this.http.get(url).map((resp: any) => {
        console.log('Llama LoginUser');
        // Checar opciones de Exito, por contraseña temporal etc.
        if (resp.Exito === 0) {
          this.borrarStorage();
          return false;
        }

        this.guardarStorage(localStorage.getItem('userName'), localStorage.getItem('id'), this.token, null, resp.Area_Id,
          resp.FechaUltAcceso, resp.LugarSucursal, resp.Rol_Id);

        return true;
      }).toPromise();
    } catch (e) {
      this.borrarStorage();
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async changePassword(userId, pass, newPass, newPassConfirm) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS +
        `/ActualizaPassword?Usu=${userId}&Pwd=${pass}&PwdConfirma=${pass}&PwdNuevo=${newPass}&PwdNuevoConfirma=${newPassConfirm}&`;
      return await this.http.post(url, {})
        .map((resp: any) => {
          if (resp.Exito !== 1) {
            throw resp;
          }
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async getNewPassword(userId) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS +
        `/NuevoPassword?Usu=${userId}&Origen=1`;
      return await this.http.post(url, {})
        .map((resp: any) => {
          if (resp.Exito !== 1) {
            throw resp;
          }
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  loginAjaxTest(param) {
    $.ajax({
      type: 'POST',
      url: URL_SERVER + '/login',
      data: param,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: 'json',
      complete: function (data) {
      },
      success: function (data) {
        console.log(data);
      },
      error: function (e) {
        let msj = JSON.parse(e.responseText);

        if (msj.error_description === '0') {
        } else if (msj.error_description === '4') {
        }
      }
    });
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {

    if (localStorage.getItem('access_token')) {
      this.token = localStorage.getItem('access_token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  borrarStorage() {
    this.token = '';
    this.menu = [];

    localStorage.removeItem('id');
    localStorage.removeItem('userName');
    localStorage.removeItem('access_token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('Area_Id');
    localStorage.removeItem('FechaUltAcceso');
    localStorage.removeItem('LugarSucursal');
    localStorage.removeItem('Rol_Id');
  }

  logout() {
    // this.usuario = null;
    this.borrarStorage();
    this.router.navigate(['/login']);
  }

  async getUserInactiveTypes() {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/TipoInactividadUsuario';
      return await this.http.get(url)
        .map((resp: any) => {
          return resp.data;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async blockUser(NomUsuario: string, TipoInactivo: number) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS +
        `/BloquearUsuario?NomUsuario=${NomUsuario}&TipoInactivo=${TipoInactivo}`;
      return await this.http.post(url, {})
        .map((resp: any) => {
          if (resp.Exito !== 1) {
            throw resp;
          }
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async unblockUser(NomUsuario: string) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS +
        `/DesbloquearUsuario?NomUsuario=${NomUsuario}`;
      return await this.http.post(url, {})
        .map((resp: any) => {
          if (resp.Exito !== 1) {
            throw resp;
          }
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

}
