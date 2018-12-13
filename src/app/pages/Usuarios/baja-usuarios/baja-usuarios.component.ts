import { Component, OnInit, ViewChild } from '@angular/core';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-baja-usuarios',
  templateUrl: './baja-usuarios.component.html',
  styles: []
})
export class BajaUsuariosComponent implements OnInit {

  usuario: Usuario = new Usuario('', 0, 0, '', 0, new Date(), new Date(), new Date(), 0, '', '', '', '', 0, '', '', '', '');
  userAlias = '';
  @ViewChild('tipoInactivoDLL') tipoInactivoDLL: InputSelectComponent;

  constructor() { }

  ngOnInit() {
  }

}
