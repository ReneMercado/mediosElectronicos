import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UsuarioService } from '../services/service.index';
// import { Usuario } from '../models/usuario.model';

declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  ingresar(forma: NgForm) {
    console.log(forma.value);

    if (forma.invalid) {
      return;
    }

    // let usuario = new Usuario(null, forma.value.email, forma.value.password);

    // this._usuarioService.login(usuario, forma.value.recuerdame)
    //   .subscribe(correcto => this.router.navigate(['/dashboard']));

    this.router.navigate(['/dashboard']);

  }

}
