import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarjeta } from '../../../models/tarjeta.model';
import { Empleado } from '../../../models/empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-cambio-nip',
  templateUrl: './cambio-nip.component.html',
  styles: []
})
export class CambioNipComponent implements OnInit {
  empleado: Empleado = new Empleado(0, '', '', 0, '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', '', 0, 0, '', '', 0, 0, '', '', '', '', '', '', '');
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  celular = '';
  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;

  constructor(
    public route: ActivatedRoute,
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

  onClickAceptar() {
    this.router.navigate(['/dashboard']);
  }

  onClickCancelar() {
    this.router.navigate(['/dashboard']);
  }

}
