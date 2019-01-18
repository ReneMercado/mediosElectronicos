import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado/empleado.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';

@Component({
  selector: 'app-consulta-empleado',
  templateUrl: './consulta-empleado.component.html',
  styles: []
})
export class ConsultaEmpleadoComponent implements OnInit {
  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;
  @ViewChild('empleadoDDL') empleadoDDL: InputSelectComponent;

  filtros = {
    Id_Empleado: 0,
    NumEmpleado: '',
    Empresa_Id: 0,
    PrimerNombre: '',
    SegundoNombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    RFC: '',
    Estatus: 'A',
    Fec_IniCon: new Date('1900/01/01').toDateString(),
    Fec_FinCon: new Date('1900/01/01').toDateString(),
  };

  columnDefs = [
    { headerName: 'Empresa', field: 'Empresa' },
    { headerName: 'Numero Empleado', field: 'NumEmpleado', width: 170 },
    { headerName: 'Nombre', field: 'Nombre', width: 400 },
    { headerName: 'Num. Tarjeta', field: 'NumTarjeta' },
    { headerName: 'RFC', field: 'RFC' },
    { headerName: 'Estatus', field: 'Estatus', cellRenderer: this.EstatusRenderer.bind(this) }
  ];

  rowData = [];

  constructor(
    public router: Router,
    public _empleadoService: EmpleadoService,
    public _empresaService: EmpresaService
  ) { }

  async ngOnInit() {
    let empresas = (await this._empresaService.getEmpresas(null)).Empresas;
    let empleados = (await this._empleadoService.getEmpleados(this.filtros)).Empleados;

    this.empresaDDL.changeOptions(empresas);
    this.empleadoDDL.changeOptions(empleados);
    this.rowData = empleados;
  }

  EstatusRenderer(params) {
    if (params.node.data.Estatus === 'A') {
      return 'Alta';
    } else if (params.node.data.Estatus === 'B') {
      return 'Baja';
    }

    return params.node.data.Estatus;
  }

  async onFilter() {
    this.rowData = (await this._empleadoService.getEmpleados(this.filtros)).Empleados;
  }

  onNavigateEmpleado = ($event) => {
    let navigationExtras: NavigationExtras = {
      queryParams: $event.data
    };
    this.router.navigate(['/modificacion-empleado'], navigationExtras);
  }
}
