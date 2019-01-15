import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import 'rxjs/add/operator/catch';
// import { UsuarioService } from '../services/service.index';
// import { Usuario } from '../models/usuario.model';
import { ROL_IDS } from '../Enums';

declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = '';
  password: string;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) {
    this._usuarioService.borrarStorage();
  }

  async ngOnInit() {
  }

  onTogglePassword(event: Event, idElement) {
    let x: any = document.getElementById(idElement);
    if (x.type === 'password') {
      x.type = 'text';
      $('#' + idElement).addClass('noPass');
      $('#' + idElement).removeClass('isPass');
      $(event.currentTarget).removeClass('flaticon-visibility-button').addClass('flaticon-turn-visibility-off-button');
    } else {
      x.type = 'password';
      $('#' + idElement).addClass('isPass');
      $('#' + idElement).removeClass('noPass');
      $(event.currentTarget).removeClass('flaticon-turn-visibility-off-button').addClass('flaticon-visibility-button');
    }
  }

  async ingresar(forma: NgForm) {
    try {
      if (forma.invalid) {
        return;
      }

      await this._usuarioService.loginToken(forma.value.userId, forma.value.password)
      let logged = await this._usuarioService.loginUser(forma.value.userId, forma.value.password);

      if (logged) {
        if (ROL_IDS.AdminRol === +localStorage.getItem('Rol_Id')) {
          this.router.navigate(['/consulta-empresa']);
        } else if (ROL_IDS.OperadorCC === +localStorage.getItem('Rol_Id')
          || ROL_IDS.SupervisorCC === +localStorage.getItem('Rol_Id')) {
          this.router.navigate(['/dashboard']);
        }
      } else {
        swal('Error', 'No se pudo iniciar sesión', 'error');
      }
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

  async recuperarPassword() {
    try {
      if (this.userId.trim() !== '') {
        let resp = await this._usuarioService.getNewPassword(this.userId);
        swal('Exito!', resp.Err_Mensaje, 'success');
      } else {
        swal('Error', 'Se necesita llenar el campo usuario', 'error');
      }
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

}
