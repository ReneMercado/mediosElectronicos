import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

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
    '',
    ''
  ];

  supervisorRutas = ['', ''];

  ROLS = {
    AdminRol: { ID: 1 },
    SupervisorCC: { ID: 2 },
    OperadorCC: { ID: 3 },
    Empleado: { ID: 4 },
  };

  constructor(public _usuarioService: UsuarioService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state.url); // Ej. /baja-empleado
    if (+localStorage.getItem('Rol_Id') === this.ROLS.AdminRol.ID && this.adminRutas.indexOf(state.url) > -1) {
      return true;
    } else if (+localStorage.getItem('Rol_Id') === this.ROLS.SupervisorCC.ID && this.supervisorRutas.indexOf(state.url) > -1) {
      return true;
    } else if (+localStorage.getItem('Rol_Id') === this.ROLS.OperadorCC.ID && this.operadorRutas.indexOf(state.url) > -1) {
      return true;
    } else {
      console.log('Bloqueado por el Operador GUARD');
      this._usuarioService.logout();
      return false;
    }
  }
}
