import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { Contacto } from '../../../models/contacto';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-modificacion-empresa',
  templateUrl: './modificacion-empresa.component.html',
  styles: []
})
export class ModificacionEmpresaComponent implements OnInit {

  contacto: Contacto = new Contacto(0, '', '', '', '', '', '', '', '', '', 0);
  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date());
  selectValE = null;
  selectValM = null;
  selectValC = null;

  constructor(
    private route: ActivatedRoute,
    public _empresaService: EmpresaService
  ) {
    try {
      this.route.queryParams.subscribe(async params => {
        this.empresa = (await this._empresaService.getEmpresa(params.Id_Empresa)).Empresas[0] || this.empresa;
        this.empresa.FechaNacimientoRL = moment(this.empresa.FechaNacimientoRL).format('YYYY-MM-DD');
      });
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

  async ngOnInit() {

  }

  async onUpdateEmpresa() {
    try {
      await this._empresaService.updateEmpresa(this.empresa, 1);
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

}
