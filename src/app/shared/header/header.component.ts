import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
// import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

// import * as $AB from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // usuario: Usuario;
  ultimoAcceso = localStorage.getItem('FechaUltAcceso');
  userName = localStorage.getItem('userName');
  isAdmin = +localStorage.getItem('Rol_Id') === 1 ? true : false;

  oldPass = '';
  newPass = '';
  newPassConfirm = '';

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    $('.navbar .dropdown-item').on('click', function (e) {
      let $el = $(this).children('.dropdown-toggle');
      var $parent = $el.offsetParent();
      // var $parent = $el.offsetParent(".dropdown-menu");
      $(this).parent('li').toggleClass('open');

      if (!$parent.parent().hasClass('navbar-nav')) {
        if ($parent.hasClass('show')) {
          $parent.removeClass('show');
          $el.next().removeClass('show');
          $el.next().css({ 'top': -999, 'left': -999 });
        } else {
          $parent.parent().find('.show').removeClass('show');
          $parent.addClass('show');
          $el.next().addClass('show');
          $el.next().css({ 'top': $el[0].offsetTop, 'left': $parent.outerWidth() - 4 });
        }
        e.preventDefault();
        e.stopPropagation();
      }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
      $(this).find('li.dropdown').removeClass('show open');
      $(this).find('ul.dropdown-menu').removeClass('show open');
    });
  }

  onChangePassword() {
    this.oldPass = '';
    this.newPass = '';
    this.newPassConfirm = '';
    $('#changePassModal').modal('show');
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

  async onChangePasswordSubmit() {
    try {
      let result = await this._usuarioService.changePassword(localStorage.getItem('userName'),
        this.oldPass, this.newPass, this.newPassConfirm);
      swal('Exito!', result.Err_Mensaje, 'success');
      $('#changePassModal').modal('hide');
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }
}
