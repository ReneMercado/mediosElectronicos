import { Component, OnInit, ViewChild } from '@angular/core';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-baja-usuarios',
  templateUrl: './baja-usuarios.component.html',
  styles: []
})
export class BajaUsuariosComponent implements OnInit {

  usuario: Usuario = new Usuario('', 0, 0, '', 0, new Date(), new Date(), new Date(),
    0, '', '', '', '', 0, '', '', '', '', '');
  userAlias = '';
  @ViewChild('tipoInactivoDLL') tipoInactivoDLL: InputSelectComponent;

  constructor(private _usuarioService: UsuarioService) { }

  async ngOnInit() {
    this.tipoInactivoDLL.changeOptions(await this._usuarioService.getUserInactiveTypes());
  }

  async onFindUser() {
    this.usuario = await this._usuarioService.getUser(this.userAlias);

    if (+this.usuario.Estatus === 1) {
      this.tipoInactivoDLL.enable();
      this.usuario.EstatusDescripcion = 'Activo';
    } else {
      this.tipoInactivoDLL.disable();
      this.usuario.EstatusDescripcion = 'Inactivo';
    }
  }

  async bloquearUsuario() {
    try {
      let resp = await this._usuarioService.blockUser(this.userAlias, +this.usuario.TipInactivo);
      if (resp.Exito === 1) {
        swal('Exito', 'Usuario Actualizado de estatus correctamente.', 'success');
      }
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

  async desbloquearUsuario() {
    try {
      let resp = await this._usuarioService.unblockUser(this.userAlias);
      if (resp.Exito === 1) {
        swal('Exito', 'Usuario Actualizado de estatus correctamente.', 'success');
      }
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }


}
