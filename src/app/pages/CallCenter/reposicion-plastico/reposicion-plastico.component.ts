import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../../../models/tarjeta.model';
import { Empleado } from '../../../models/empleado';
import { Router } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-reposicion-plastico',
  templateUrl: './reposicion-plastico.component.html',
  styles: []
})
export class ReposicionPlasticoComponent implements OnInit {

  empleado: Empleado = new Empleado(0, '', '', 0, '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', 0, '', '', '', '', '', '', '', 0, 0, '', '', 0, 0, '', '', '', '', '', '', '');
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);

  constructor(
    public router: Router,
    public _empresaService: EmpresaService) { }

  ngOnInit() {
  }

  onClickAceptar() {
    this.router.navigate(['/dashboard']);
  }

  onClickCancelar() {
    this.router.navigate(['/dashboard']);
  }

}
