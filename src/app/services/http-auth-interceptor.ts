import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _usuarioService: UsuarioService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const authToken = 'bearer ' + this._usuarioService.token;

        // Verifica que el servicio a consumir no sea le login, ya que es cuando se conseguira el token
        if (req.url.indexOf('/Login') !== -1 && this._usuarioService.token === '') {
            return next.handle(req); // do nothing
        }

        const authReq = req.clone({ setHeaders: { Authorization: authToken, 'auth_token': 'test' } });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}