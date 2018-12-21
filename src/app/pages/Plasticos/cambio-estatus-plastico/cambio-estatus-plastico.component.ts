import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { Tarjeta } from '../../../models/tarjeta.model';
import { Empleado } from '../../../models/empleado';

@Component({
  selector: 'app-cambio-estatus-plastico',
  templateUrl: './cambio-estatus-plastico.component.html',
  styles: []
})
export class CambioEstatusPlasticoComponent implements OnInit {

  empresa: Empresa = new Empresa(0, '', '', '', '', 0, '', '', '', '', '', 0, '', 0, '', '', '', '', '', 0, 0, 0, 0, 0, '');
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  empleado: Empleado = new Empleado(0, '', '', 0, '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', '', 0, 0, '', '', 0, 0, '', '', '', '', '', '', '');
  motivoCambio = '';

  constructor() { }

  ngOnInit() {
  }

}
