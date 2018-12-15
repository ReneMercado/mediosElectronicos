import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { headerName: 'Num. Tarjeta', field: 'NumTarjeta' },
    { headerName: 'RFC', field: 'RFC' },
    { headerName: 'Estatus', field: 'Estatus' }
  ];

  rowData = [{
    Id_Empleado: 1,
    Empresa: 'Empresa',
    Nombre: 'Empleado Nombre',
    NumTarjeta: '1234567890',
    RFC: 'MGAS24D3DGKF',
    Estatus: 'Alta'
  }];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  test = ($event) => {
    this.router.navigate(['/modificacion-empleado']);
  }

}
