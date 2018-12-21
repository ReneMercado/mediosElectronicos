import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-consulta-empresa',
  templateUrl: './consulta-empresa.component.html',
  styles: []
})
export class ConsultaEmpresaComponent implements OnInit {

  filtros = {
    Id_Empresa: 0,
    Convenio: 0,
    NumEmpresa: 0,
    Nombre: null,
    RFC: null,
    RazonSocial: null,
    Estatus: null,
    Fec_IniCon: new Date('1900/01/01').toDateString(),
    Fec_FinCon: new Date('1900/01/01').toDateString(),
  };

  columnDefs = [
    { headerName: 'Convenio', field: 'Convenio' },
    { headerName: 'Empresa', field: 'Empresa' },
    { headerName: 'Razon Social', field: 'RazonSocial' },
    { headerName: 'Estatus', field: 'Estatus' }
  ];

  rowData = [{
    Id_Empresa: 1,
    Convenio: 'Convenio-1234-ab',
    Empresa: 'EmpreaPruebas',
    RazonSocial: 'RazonSocialPruebas',
    Estatus: 'Alta'
  }];

  constructor(
    public router: Router,
    public _empresaService: EmpresaService
  ) { }

  async ngOnInit() {
    this.rowData = (await this._empresaService.getEmpresas(this.filtros)).Empresas;
  }

  test = ($event) => {
    this.router.navigate(['/modificacion-empresa']);
  }

}
