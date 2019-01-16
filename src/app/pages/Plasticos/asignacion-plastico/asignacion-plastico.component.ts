import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../models/empleado';
import { Tarjeta } from '../../../models/tarjeta.model';

@Component({
  selector: 'app-asignacion-plastico',
  templateUrl: './asignacion-plastico.component.html',
  styles: []
})
export class AsignacionPlasticoComponent implements OnInit {

  empleado: Empleado = new Empleado(0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '');
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  tarjetaNueva: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  motivoCambio = '';

  constructor() { }

  ngOnInit() {
  }

}
