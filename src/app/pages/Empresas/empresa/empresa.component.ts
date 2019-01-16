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
  @ViewChild('nombre') nombre: MasInputTextComponent;
  @ViewChild('razon') razon: MasInputTextComponent;
  @ViewChild('RFC') RFC: MasInputTextComponent;
  @ViewChild('estado') estado: MasInputTextComponent;
  @ViewChild('municipio') municipio: MasInputTextComponent;
  @ViewChild('colonia') colonia: MasInputTextComponent;
  @ViewChild('calle') calle: MasInputTextComponent;
  @ViewChild('numerointerior') numerointerior: MasInputTextComponent;
  @ViewChild('numeroexterior') numeroexterior: MasInputTextComponent;
  @ViewChild('cp') cp: MasInputTextComponent;
  @ViewChild('telefono') telefono: MasInputTextComponent;
  @ViewChild('cuenta') cuenta: MasInputTextComponent;
  @ViewChild('referencia') referencia: MasInputTextComponent;
  @ViewChild('primerNombre') primerNombre: MasInputTextComponent;
  @ViewChild('apellidoPaterno') apellidoPaterno: MasInputTextComponent;
  @ViewChild('apellidoMaterno') apellidoMaterno: MasInputTextComponent;
  @ViewChild('RFCRL') RFCRL: MasInputTextComponent;
  @ViewChild('fechaNacRL') fechaNacRL: MasInputTextComponent;
  @ViewChild('nombreContacto') nombreContacto: MasInputTextComponent;
  @ViewChild('paternoContacto') paternoContacto: MasInputTextComponent;
  @ViewChild('maternoContacto') maternoContacto: MasInputTextComponent;
  @ViewChild('puestoContacto') puestoContacto: MasInputTextComponent;
  @ViewChild('extContacto') extContacto: MasInputTextComponent;
  @ViewChild('correoContacto') correoContacto: MasInputTextComponent;
  @ViewChild('telefonoOficinaContacto') telefonoOficinaContacto: MasInputTextComponent;
  @ViewChild('telefonoCelularContacto') telefonoCelularContacto: MasInputTextComponent;
  @ViewChild('semanal') semanal: MasInputTextComponent;
  @ViewChild('catorcenal') catorcenal: MasInputTextComponent;
  @ViewChild('quincenal') quincenal: MasInputTextComponent;
  @ViewChild('mensual') mensual: MasInputTextComponent;

  contacto: Contacto = new Contacto(0, '', '', '', '', '', '', '', '', '', 0);
  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date(), 0);
  selectValE = null;
  selectValM = null;
  selectValC = null;

  constructor(
    public _empresaService: EmpresaService
  ) { }

  ngOnInit() {
  }

  validarCampos() {
    return !this.nombre.valid() ||
      !this.razon.valid() ||
      !this.RFC.valid() ||
      !this.estado.valid() ||
      !this.municipio.valid() ||
      !this.colonia.valid() ||
      !this.calle.valid() ||
      !this.numerointerior.valid() ||
      !this.numeroexterior.valid() ||
      !this.cp.valid() ||
      !this.telefono.valid() ||
      !this.cuenta.valid() ||
      !this.referencia.valid() ||
      !this.primerNombre.valid() ||
      !this.apellidoPaterno.valid() ||
      !this.apellidoMaterno.valid() ||
      !this.RFCRL.valid() ||
      !this.fechaNacRL.valid() ||
      !this.nombreContacto.valid() ||
      !this.paternoContacto.valid() ||
      !this.maternoContacto.valid() ||
      !this.puestoContacto.valid() ||
      !this.extContacto.valid() ||
      !this.correoContacto.valid() ||
      !this.telefonoOficinaContacto.valid() ||
      !this.telefonoCelularContacto.valid() ||
      !this.semanal.valid() ||
      !this.catorcenal.valid() ||
      !this.quincenal.valid() ||
      !this.mensual.valid();
  }

  async Guardar() {
    try {
      if (this.validarCampos()) {
        swal('Campos Requeridos', 'Favor de llenar los campos correctamente', 'error');
        return false;
      }
      let resp = await this._empresaService.createEmpresa(this.empresa);
      if (resp.Exito === 1) {
        swal('Exito', resp.Err_Mensaje || resp.message, 'success');
      } else {
        swal('Error', resp.Err_Mensaje || resp.message, 'error');
      }
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }

  }
}
