import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../../models/empresa';

@Component({
  selector: 'app-baja-empresa',
  templateUrl: './baja-empresa.component.html',
  styles: []
})
export class BajaEmpresaComponent implements OnInit {

  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;
  empresa: Empresa = new Empresa(0, '', '', '', '', 0, '', '', '', '', '', 0, '', 0, '', '', '', '','',0,0,0,0,0,'');

  constructor() { }

  ngOnInit() {
    this.empresaAddDDL.changeOptions([]);
  }

}
