import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../models/contacto';
import { Politicas } from '../../models/politicas';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styles: []
})
export class PoliticasComponent implements OnInit {

  constructor() { }
  politicas: Politicas = new Politicas(0,'','','','');
  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;

  ngOnInit() {
    this.empresaAddDDL.changeOptions([]);
  }

}
