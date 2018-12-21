import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';
import { ROL_IDS } from '../../Enums';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  adminRutas = [
    '/consulta-empresa',
    '/empresa',
    '/baja-empresa',
    '/consulta-empleado',
    '/alta-empleado',
    '/baja-empleado',
    '/alta-plastico',
    '/asignacion-masiva-plastico',
    '/asignacion-plastico',
    '/cambio-estatus-plastico',
    '/consulta-usuario',
    '/baja-usuario'
  ];

  operadorRutas = [
    '/dashboard',
    '/autenticacion',
    '/activacion-plastico',
    '/bloquear-plastico',
    '/consulta-movimientos',
    '/cambio-nip'
  ];

  supervisorRutas = ['', ''];

  constructor(public _usuarioService: UsuarioService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = (state.url).split('?')[0];
    console.log(url); // Ej. /baja-empleado
    if (+localStorage.getItem('Rol_Id') === ROL_IDS.AdminRol && this.adminRutas.includes(url)) {
      return true;
    } else if (+localStorage.getItem('Rol_Id') === ROL_IDS.SupervisorCC && this.supervisorRutas.includes(url)) {
      return true;
    } else if (+localStorage.getItem('Rol_Id') === ROL_IDS.OperadorCC && this.operadorRutas.includes(url)) {
      return true;
    } else {
      console.log('Bloqueado por el Operador GUARD');
      this._usuarioService.logout();
      return false;
    }
  }
}
