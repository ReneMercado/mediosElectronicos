import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../../models/empresa';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baja-empresa',
  templateUrl: './baja-empresa.component.html',
  styles: []
})
export class BajaEmpresaComponent implements OnInit {

  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;
  @ViewChild('motivoDDL') motivoDDL: InputSelectComponent;
  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date(), 0);

  constructor(
    public _empresaService: EmpresaService,
    public router: Router
  ) { }

  async ngOnInit() {
    this.empresaAddDDL.changeOptions((await this._empresaService.getEmpresas(null)).Empresas);
    this.motivoDDL.changeOptions((await this._empresaService.getMotivoBajaEmpresa()).data);
  }

  async onEmpresaChange(Id_Empresa) {
    this.empresa = (await this._empresaService.getEmpresa(Id_Empresa)).Empresas[0] || {};
  }

  async onUpdateEmpresa() {
    try {
      this.empresa.Estatus = 'B';
      let resp = await this._empresaService.updateEmpresa(this.empresa, 1);
      if (resp.Exito === 1) {
        swal('Exito', 'Registro Actualizado', 'success');
        this.empresaAddDDL.setOption(0);
        this.motivoDDL.setOption(0);
        this.empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
          '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
          0, 0, new Date(), 0, new Date(), 0);
      }
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

  onCancelar() {
    this.router.navigate(['/consulta-empresa']);
  }

}
