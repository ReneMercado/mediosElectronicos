import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../models/empresa';

@Component({
  selector: 'app-asignacion-masiva-plasticos',
  templateUrl: './asignacion-masiva-plasticos.component.html',
  styles: []
})
export class AsignacionMasivaPlasticosComponent implements OnInit {

  cargaMasiva = '';
  showResultDiv = false;
  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date());
  columnDefs = [
    { headerName: 'Empresa', field: 'Empresa' },
    { headerName: 'Empleado', field: 'Empleado' }
  ];
  rowData = [];

  constructor() { }

  ngOnInit() {
  }

  asignarPlasticos() {
    this.showResultDiv = true;
  }
}
