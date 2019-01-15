import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';

@Component({
  selector: 'app-consulta-empresa',
  templateUrl: './consulta-empresa.component.html',
  styles: []
})
export class ConsultaEmpresaComponent implements OnInit {

  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;

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
    { headerName: 'Empresa', field: 'Nombre', width: 400 },
    { headerName: 'Razon Social', field: 'RazonSocial', width: 400 },
    { headerName: 'Estatus', field: 'Estatus', width: 210 }
  ];

  rowData = [];

  constructor(
    public router: Router,
    public _empresaService: EmpresaService
  ) { }

  async ngOnInit() {
    let empresas = (await this._empresaService.getEmpresas(this.filtros)).Empresas;
    this.empresaDDL.changeOptions(empresas);

    this.rowData = empresas;
  }

  async onFilter() {
    this.rowData = (await this._empresaService.getEmpresas(this.filtros)).Empresas;
  }

  onNavigateEmpresa = ($event) => {
    let navigationExtras: NavigationExtras = {
      queryParams: $event.data
    };
    this.router.navigate(['/modificacion-empresa'], navigationExtras);
  }

}
