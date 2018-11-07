import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  textName2: string;
  textName: string;
  graficos: any = {
    'grafico1': {
      'labels': ['Conectados', 'Desconectados'],
      'data': [24, 40],
      'type': 'doughnut',
      'leyenda': 'Agentes'
    },
    'grafico2': {
      'labels': ['Pendientes', 'Realizadas'],
      'data': [500, 2000],
      'type': 'doughnut',
      'leyenda': 'Visitas Realizadas'
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
