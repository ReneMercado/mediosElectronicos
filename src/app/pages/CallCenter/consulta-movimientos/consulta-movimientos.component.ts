import { Component, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { Tarjeta } from '../../../models/tarjeta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-consulta-movimientos',
  templateUrl: './consulta-movimientos.component.html',
  styles: []
})
export class ConsultaMovimientosComponent implements OnInit {

  empleado: Empleado = new Empleado(0, '', '', 0, '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', '', 0, 0, '', '', 0, 0, '', '', '', '', '', '', '');
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;

  columnDefs = [
    { headerName: 'Fecha', field: 'Fecha' },
    { headerName: 'Hora', field: 'Hora' },
    { headerName: 'Movimiento', field: 'Movimiento' },
    { headerName: 'Bono', field: 'Bono' },
    { headerName: 'Cargo', field: 'Cargo' }
  ];

  rowData = [{
    Id_Movimiento: 1,
    Fecha: '20/12/2018',
    Hora: '11:11 a.m',
    Movimiento: 'Movimiento Pruebas',
    Bono: '$0.0',
    Cargo: '$100.00',
  }];


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
