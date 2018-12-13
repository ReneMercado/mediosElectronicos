import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-empresa',
  templateUrl: './consulta-empresa.component.html',
  styles: []
})
export class ConsultaEmpresaComponent implements OnInit {

  filtros = {
    Id_Empresa: 0,
    Convenio: 0,
    NumEmpresa: 0,
    Nombre: '',
    RFC: '',
    RazonSocial: '',
    Estatus: 1,
    Fec_IniCon: new Date('01/01/0001 12:00:00 a. m.'),
    Fec_FinCon: new Date('01/01/0001 12:00:00 a. m.'),
  };

  columnDefs = [
    { headerName: 'Convenio', field: 'Convenio' },
    { headerName: 'Empresa', field: 'Empresa' },
    { headerName: 'Razon Social', field: 'Razon Social' },
    { headerName: 'Estatus', field: 'Estatus' }
  ];

  rowData = [];

  constructor() { }

  ngOnInit() {
  }

}
