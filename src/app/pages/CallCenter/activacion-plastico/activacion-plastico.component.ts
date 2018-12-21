import { Component, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { Tarjeta } from '../../../models/tarjeta.model';
import { Router } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';

@Component({
  selector: 'app-activacion-plastico',
  templateUrl: './activacion-plastico.component.html',
  styles: []
})
export class ActivacionPlasticoComponent implements OnInit {
  empleado: Empleado = new Empleado(0, '', '', 0, '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', '', 0, 0, '', '', 0, 0, '', '', '', '', '', '', '');
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;

  constructor(
    public router: Router,
    public _empresaService: EmpresaService
  ) { }

  async ngOnInit() {
    try {
      this.empresaDDL.changeOptions((await this._empresaService.getEmpresas(null)).Empresas);
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

  activar() {

  }

  cancelar() {
    this.router.navigate(['/dashboard']);
  }
}
