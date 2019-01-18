import { Component, OnInit, ViewChild } from '@angular/core';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { PlasticoService } from '../../../services/plastico/plastico.service';
import { CargaMasiva } from '../../../models/cargaMasiva.model';
import { Empresa } from '../../../models/empresa';

@Component({
  selector: 'app-alta-plastico',
  templateUrl: './alta-plastico.component.html',
  styles: []
})
export class AltaPlasticoComponent implements OnInit {

  @ViewChild('empresaAddDDL') empresaAddDDL: InputSelectComponent;

  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
  0, 0, new Date(), 0, new Date(), 0);

  columnDefs = [
    { headerName: 'Numero de Plastico', field: 'NumTarjeta' },
    { headerName: 'Producto', field: 'Producto_Id' }
  ];
  cargaMasiva = new CargaMasiva(0, '', 0);

  rowData = [];
  listaErrores = [];
  correctos = 0;
  fallidos = 0;
  showResultDiv = false;

  constructor(
    public _plasticoService: PlasticoService,
    public _empresaService: EmpresaService) { }

  async ngOnInit() {
    let empresas = (await this._empresaService.getEmpresas(null)).Empresas;
    this.empresaAddDDL.changeOptions(empresas);
  }

  async onEmpresaChange(Id_Empresa) {
    this.cargaMasiva.Empresa_Id = Id_Empresa;
    this.empresa = (await this._empresaService.getEmpresa(Id_Empresa)).Empresas[0] || {};
  }

  async guardarPlasticos() {
    try {

      if (!this.empresaAddDDL.valid() || this.cargaMasiva.Contenido.trim() === '') {
        swal('Campos Requeridos', 'Favor de llenar los campos correctamente', 'error');
        return false;
      }

      let resp = await this._plasticoService.crearPlasticosMasiva(this.cargaMasiva);
      this.listaErrores = resp.ListaErroresTarjeta;
      this.correctos = resp.Correctos;
      this.fallidos = resp.Fallidos;
      this.showResultDiv = true;
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

}
