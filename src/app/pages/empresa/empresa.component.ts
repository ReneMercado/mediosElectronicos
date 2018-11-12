import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../models/empresa';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: []
})
export class EmpresaComponent implements OnInit {

  @ViewChild('numeroEmpresaAdd') numeroEmpresaAdd: MasInputTextComponent;
  @ViewChild('nombreAdd') nombreAdd: MasInputTextComponent;
  @ViewChild('razonAdd') razonAdd: MasInputTextComponent;
  @ViewChild('rfcAdd') rfcAdd: MasInputTextComponent;
  @ViewChild('calleAdd') calleAdd: MasInputTextComponent;
  @ViewChild('numerointeriorAdd') numerointeriorAdd: MasInputTextComponent;
  @ViewChild('numeroexteriorAdd') numeroexteriorAdd: MasInputTextComponent;
  @ViewChild('cpAdd') cpAdd: MasInputTextComponent;
  @ViewChild('telefonoAdd') telefonoAdd: MasInputTextComponent;
  @ViewChild('cuentaAdd') cuentaAdd: MasInputTextComponent;
  @ViewChild('referenciaAdd') referenciaAdd: MasInputTextComponent;



  @ViewChild('estadosAddDDL') estadosAddDDL: InputSelectComponent;
  @ViewChild('municipiosAddDDL') municipiosAddDDL: InputSelectComponent;
  @ViewChild('coloniasAddDDL') coloniasAddDDL: InputSelectComponent;

  empresa: Empresa = new Empresa(0,'','','','',0,'','','','','',0,'',0,'','','','','');
  selectValE = null;
  selectValM = null;
  selectValC = null;

  constructor() { }

  ngOnInit() {
  }


  Guardar() {
    alert(this.numeroEmpresaAdd.textInput);
    alert(this.nombreAdd.textInput);
    alert(this.razonAdd.textInput);
    alert(this.rfcAdd.textInput);
    alert(this.estadosAddDDL);
    alert(this.municipiosAddDDL);
    alert(this.coloniasAddDDL);
    alert(this.calleAdd.textInput);
    alert(this.numerointeriorAdd.textInput);
    alert(this.numeroexteriorAdd.textInput);
    alert(this.cpAdd.textInput);
    alert(this.telefonoAdd.textInput);
    alert(this.cuentaAdd.textInput);
    alert(this.referenciaAdd.textInput);

  }

  onEstadoChanged($event) {
    this.selectValE = $event;
    //let municipios;
    //this._zonaservice.getMunicipios($event).subscribe((resp) => {
    //  municipios = resp
    //  this.municipiosAddDDL.changeOptions(municipios);
    //});
  }


  onMunicipioChanged($event) {
    this.selectValM = $event;
    //this._zonaservice.getCPMunicipio($event).subscribe((resp) => {
    //  this.rowData = resp
    //});
  }

  onColoniaChanged($event) {
    this.selectValC = $event;
  }

}
