import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../../models/empresa';
import { Contacto } from '../../../models/contacto';
import { EmpresaService } from '../../../services/empresa/empresa.service';



@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: []
})
export class EmpresaComponent implements OnInit {

  contacto: Contacto = new Contacto(0, '', '', '', '', '', '', '', '', '', 0);
  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date());
  selectValE = null;
  selectValM = null;
  selectValC = null;

  constructor(
    public _empresaService: EmpresaService
  ) { }

  ngOnInit() {
  }


  async Guardar() {
    try {
      let resp = await this._empresaService.createEmpresa(this.empresa);
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }

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
