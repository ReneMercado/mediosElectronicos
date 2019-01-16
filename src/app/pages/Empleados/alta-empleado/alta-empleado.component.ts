import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../../models/empresa';
import { Empleado } from '../../../models/empleado';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { EmpleadoService } from '../../../services/empleado/empleado.service';
import { CargaMasiva } from '../../../models/cargaMasiva.model';
import { InputFileComponent } from '../../../components/input-file/input-file.component';


@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styles: []
})
export class AltaEmpleadoComponent implements OnInit {

  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;
  @ViewChild('inputFile') inputFile: InputFileComponent;
  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date(), 0);
  empleado: Empleado = new Empleado(0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '');
  cargaMasiva = new CargaMasiva(0, '', 0);


  columnDefs = [
    { headerName: 'RFC', field: 'RFC' },
    { headerName: 'Primer Nombre', field: 'PrimerNombre' },
    { headerName: 'Segundo Nombre', field: 'SegundoNombre' },
    { headerName: 'Apellido Paterno', field: 'ApellidoPaterno' },
    { headerName: 'Apellido Materno', field: 'ApellidoMaterno' }
  ];
  rowData = [];
  listaErrores = [];
  correctos = 0;
  fallidos = 0;

  showResultDiv = false;
  constructor(
    public _empleadoService: EmpleadoService,
    public _empresaService: EmpresaService) { }

  async ngOnInit() {
    let empresas = (await this._empresaService.getEmpresas(null)).Empresas;
    this.empresaAddDDL.changeOptions(empresas);
  }

  async onEmpresaChange(Id_Empresa) {
    this.cargaMasiva.Empresa_Id = Id_Empresa;
    this.empresa = (await this._empresaService.getEmpresa(Id_Empresa)).Empresas[0] || {};
  }

  async guardarEmpleados() {
    try {

      if (!this.empresaAddDDL.valid() || this.cargaMasiva.Contenido.trim() === '') {
        swal('Campos Requeridos', 'Favor de llenar los campos correctamente', 'error');
        return false;
      }

      let resp = await this._empleadoService.crearEmpleadosMasiva(this.cargaMasiva);
      this.listaErrores = resp.ListaErroresEmpleados;
      this.correctos = resp.Correctos;
      this.fallidos = resp.Fallidos;
      this.showResultDiv = true;
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

}
