import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(public http: HttpClient,
    public router: Router,
    public loader: LoaderService) { }
}
