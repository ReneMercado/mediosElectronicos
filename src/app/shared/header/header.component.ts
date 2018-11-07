import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
// import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // usuario: Usuario;

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

}
