import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-empleado',
  templateUrl: './consulta-empleado.component.html',
  styles: []
})
export class ConsultaEmpleadoComponent implements OnInit {

  filtros = {
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

  columnDefs = [
    { headerName: 'Empresa', field: 'Empresa' },
    { headerName: 'Nombre', field: 'Nombre' },
    { headerName: 'Num. Tarjeta', field: 'Num. Tarjeta' },
    { headerName: 'RFC', field: 'RFC' },
    { headerName: 'Estatus', field: 'Estatus' }
  ];

  rowData = [];

  constructor() { }

  ngOnInit() {
  }

}
