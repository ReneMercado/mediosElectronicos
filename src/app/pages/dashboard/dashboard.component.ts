import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  textName2: string;
  textName: string;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('autEmpleado') && localStorage.getItem('autTarjeta')) {
      swal('¿Desea hacer otro movimiento?', {
        buttons: {
          cancel: {
            text: 'Terminar',
            value: false,
            visible: true
          },
          continuar: {
            text: 'Continuar',
            value: true,
          }
        },
      }).then((value) => {
        if (!value) {
          localStorage.removeItem('autEmpleado');
          localStorage.removeItem('autTarjeta');

          swal('¡Sesión Terminada!');
        }
      });
    }
  }

  onClickCard(needAuthPage, nextPage) {

    if (needAuthPage) {
      this.router.navigate(['/autenticacion'], { queryParams: { nextPage: nextPage } });
    } else {
      this.router.navigate([`${nextPage}`]);
    }

  }

}
