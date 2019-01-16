import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import swal from 'sweetalert';
import { MasInputTextComponent } from '../../../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { NgForm } from '@angular/forms';
import { Empresa } from '../../../models/empresa';
import { Empleado } from '../../../models/empleado';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { EmpleadoService } from '../../../services/empleado/empleado.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-modificacion-empleado',
  templateUrl: './modificacion-empleado.component.html',
  styles: []
})
export class ModificacionEmpleadoComponent implements OnInit {

  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;
  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date(), 0);
  empleado: Empleado = new Empleado(0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '');
  constructor(
    private route: ActivatedRoute,
    public _empresaService: EmpresaService,
    public _empleadoService: EmpleadoService,
  ) { }

  async ngOnInit() {

    try {
      this.route.queryParams.subscribe(async params => {

        this.empleado = (await this._empleadoService.getEmpleado(params.Id_Empleado)).Empleados[0] || this.empleado;
        this.empleado.FechaNacimiento = moment(this.empleado.FechaNacimiento).format('YYYY-MM-DD');
        this.empleado.FechaIngreso = moment(this.empleado.FechaIngreso).format('YYYY-MM-DD');
        this.empleado.FechaFinContrato = moment(this.empleado.FechaFinContrato).format('YYYY-MM-DD');
        this.empleado.FechaCreacion = moment(this.empleado.FechaCreacion).format('YYYY-MM-DD');

        let empresas = (await this._empresaService.getEmpresas(null)).Empresas;
        this.empresaDDL.changeOptions(empresas);
        this.empresaDDL.setOption(this.empleado.Empresa_Id);

      });
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }


  }

}
