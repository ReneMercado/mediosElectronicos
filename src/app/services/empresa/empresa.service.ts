import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/loader/loader.service';
import { Empresa } from '../../models/empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(public http: HttpClient,
    public router: Router,
    public loader: LoaderService
  ) { }

  async getEmpresas(obj: any) {
    try {

      if (obj === null) {
        obj = {
          Id_Empresa: 0,
          Convenio: 0,
          NumEmpresa: 0,
          Nombre: null,
          RFC: null,
          RazonSocial: null,
          Estatus: null,
          Fec_IniCon: new Date('1900/01/01').toDateString(),
          Fec_FinCon: new Date('1900/01/01').toDateString(),
        };
      }

      this.loader.show();
      const url = URL_SERVICIOS + `/ConsultaEmpresa?Id_Empresa=${obj.Id_Empresa}&Convenio=${obj.Convenio}` +
        `&Nombre=${obj.Nombre}&RazonSocial=${obj.RazonSocial}&RFC=${obj.RFC}&Estatus=${obj.Estatus}` +
        `&Fec_IniCon=${obj.Fec_IniCon}&Fec_FinCon=${obj.Fec_FinCon}`;

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


  async createEmpresa(empresa: Empresa) {
    try {
      this.loader.show();
      const url = URL_SERVICIOS + '/AltaEmpresa';
      return await this.http.post(url, empresa)
        .map((resp: any) => {
          return resp;
        }).toPromise();
    } catch (e) {
      throw e;
    } finally {
      this.loader.hide();
    }
  }
}
