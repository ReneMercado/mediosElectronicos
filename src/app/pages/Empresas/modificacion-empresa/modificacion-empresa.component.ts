import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { Contacto } from '../../../models/contacto';

@Component({
  selector: 'app-modificacion-empresa',
  templateUrl: './modificacion-empresa.component.html',
  styles: []
})
export class ModificacionEmpresaComponent implements OnInit {

  contacto: Contacto = new Contacto(0, '', '', '', '', '', '', '', '', '', 0);
  empresa: Empresa = new Empresa(0, '', '', '', '', 0, '', '', '', '', '', 0, '', 0, '', '', '', '', '', 0, 0, 0, 0, 0, '');
  selectValE = null;
  selectValM = null;
  selectValC = null;

  constructor() { }

  ngOnInit() {
  }

}
