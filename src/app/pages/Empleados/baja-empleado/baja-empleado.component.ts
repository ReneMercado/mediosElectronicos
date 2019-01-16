import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../../models/empresa';
import { Empleado } from '../../../models/empleado';


@Component({
  selector: 'app-baja-empleado',
  templateUrl: './baja-empleado.component.html',
  styles: []
})
export class BajaEmpleadoComponent implements OnInit {

  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;
  @ViewChild('empleadoAddDDL') empleadoAddDDL: InputSelectComponent;

  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date(), 0);
  empleado: Empleado = new Empleado(0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '');

  @ViewChild('numeroEmpleadoAdd') numeroEmpleadoAdd: MasInputTextComponent;

  constructor() { }

  ngOnInit() {
    this.empresaAddDDL.changeOptions([]);
    this.empleadoAddDDL.changeOptions([]);
  }

}
