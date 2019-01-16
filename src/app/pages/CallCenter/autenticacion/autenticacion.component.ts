import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../../models/empleado';
import { Tarjeta } from '../../../models/tarjeta.model';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styles: []
})
export class AutenticacionComponent implements OnInit {
  empleado: Empleado = new Empleado(0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '');
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  nextPage = '';
  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public _empresaService: EmpresaService
  ) { }

  async ngOnInit() {
    try {
      this.route.queryParams.subscribe(params => {

        this.nextPage = params.nextPage;

        if (localStorage.getItem('autEmpleado') && localStorage.getItem('autTarjeta')) {
          this.router.navigate([this.nextPage]);
        }
      });

      this.empresaDDL.changeOptions((await this._empresaService.getEmpresas(null)).Empresas);
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

  onClickSiguiente() {
    this.router.navigate([this.nextPage]);

    localStorage.setItem('autEmpleado', JSON.stringify(this.empleado));
    localStorage.setItem('autTarjeta', JSON.stringify(this.tarjeta));
  }

  onClickCancelar() {
    this.router.navigate(['/dashboard']);
  }

}
