import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  constructor() { }

  contacto: Contacto = new Contacto(0, '','','','','','','','','',0);
  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;


  ngOnInit() {
    this.empresaAddDDL.changeOptions([]);
  }

}
