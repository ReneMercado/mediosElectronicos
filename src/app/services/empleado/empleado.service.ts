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
export class EmpleadoService {

  constructor(public http: HttpClient,
    public router: Router,
    public loader: LoaderService
  ) { }


  async getEmpleados(obj: any) {
    try {

      if (obj === null) {
        obj = {
          Id_Empleado: 0,
          NumEmpleado: 0,
          Empresa_Id: 0,
          PrimerNombre: '',
          SegundoNombre: '',
          ApellidoPaterno: '',
          ApellidoMaterno: '',
          RFC: '',
          Estatus: 1,
          Fec_IniCon: new Date('01/01/0001 12:00:00 a. m.'),
          Fec_FinCon: new Date('01/01/0001 12:00:00 a. m.'),
        };
      }

      this.loader.show();
      const url = URL_SERVICIOS + `/ConsultaEmpleados?Id_Empleado=${obj.Id_Empleado}&NumEmpleado=${obj.NumEmpleado}` +
        `&Empresa_Id=${obj.Empresa_Id}&PrimerNombre=${obj.PrimerNombre}&SegundoNombre=${obj.SegundoNombre}` +
        `&ApellidoPaterno=${obj.ApellidoPaterno}&ApellidoMaterno=${obj.ApellidoMaterno}&RFC=${obj.RFC}` +
        `&Estatus=${obj.Estatus}&Fec_IniCon=${obj.Fec_IniCon}&Fec_FinCon=${obj.Fec_FinCon}` +
        `&Tip_Con=C1`;

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

  async getEmpleado(Id_Empleado: any) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/ConsultaEmpleado';
      return await this.http.get(url, {
        params: {
          'Id_Empleado': Id_Empleado,
        }
      })
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }

  async crearEmpleadosMasiva(carga: CargaMasiva) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/AltaMasivaEmpleados';
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
