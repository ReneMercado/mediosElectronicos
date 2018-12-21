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
  }

  onClickCard(needAuthPage, nextPage) {

    if (needAuthPage) {
      this.router.navigate(['/autenticacion'], { queryParams: { nextPage: nextPage } });
    } else {
      this.router.navigate([`${nextPage}`]);
    }

  }

}
