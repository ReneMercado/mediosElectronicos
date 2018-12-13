import { Component, OnInit, ViewChild } from '@angular/core';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';

@Component({
  selector: 'app-alta-plastico',
  templateUrl: './alta-plastico.component.html',
  styles: []
})
export class AltaPlasticoComponent implements OnInit {

  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;

  params = {
    Empresa_Id: 0,
    RazonSocial: '',
    RFC: ''
  };

  columnDefs = [
    { headerName: 'Numero de Plastico', field: 'Numero de Plastico' },
    { headerName: 'Producto', field: 'Producto' }
  ];

  rowData = [];

  showResultDiv = false;

  constructor() { }

  ngOnInit() {
  }


  guardarPlasticos() {
    this.showResultDiv = true;
  }

}
