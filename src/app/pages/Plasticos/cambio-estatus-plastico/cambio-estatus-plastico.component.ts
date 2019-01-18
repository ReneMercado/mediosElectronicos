import { Component, OnInit, ViewChild } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { Tarjeta } from '../../../models/tarjeta.model';
import { Empleado } from '../../../models/empleado';
import { PlasticoService } from '../../../services/plastico/plastico.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { Router } from '@angular/router';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import * as moment from 'moment';

@Component({
  selector: 'app-cambio-estatus-plastico',
  templateUrl: './cambio-estatus-plastico.component.html',
  styles: []
})
export class CambioEstatusPlasticoComponent implements OnInit {

  @ViewChild('empresaDDL') empresaDDL: InputSelectComponent;
  @ViewChild('estatusDDL') estatusDDL: InputSelectComponent;
  @ViewChild('estatusNuevoDDL') estatusNuevoDDL: InputSelectComponent;

  empresa: Empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
    0, 0, new Date(), 0, new Date(), 0);
  tarjeta: Tarjeta = new Tarjeta(0, 0, '', '', '', '', 0, '', 0, 0, new Date(), 0, new Date(), 0, 0, 0, 0, 0);
  empleado: Empleado = new Empleado(0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '');
  motivoCambio = '';

  constructor(
    public router: Router,
    public _empresaService: EmpresaService,
    public _plasticoService: PlasticoService) { }

  async ngOnInit() {
    let empresas = (await this._empresaService.getEmpresas(null)).Empresas;
    let tarjetaEstatus = (await this._plasticoService.getTarjetaEstatus());
    this.empresaDDL.changeOptions(empresas);
    this.estatusDDL.changeOptions(tarjetaEstatus);
    this.estatusNuevoDDL.changeOptions(tarjetaEstatus);
  }

  async onEmpresaChange(Id_Empresa) {
    this.empresa = (await this._empresaService.getEmpresa(Id_Empresa)).Empresas[0] || {};
  }

  async onNumTarjetaBlur($event: string) {
    if ($event.trim() !== '') {
      let infoTar = (await this._plasticoService.getTarjeta(0, $event
        , 0, 'C3')).Tarjetas[0] || {};

      // Verifica que hay resultado en la busqueda
      if (infoTar.hasOwnProperty('Id_Tarjeta')) {
        this.empleado.PrimerNombre = infoTar.PrimerNombre || '';
        this.empleado.SegundoNombre = infoTar.SegundoNombre || '';
        this.empleado.ApellidoPaterno = infoTar.ApellidoPaterno || '';
        this.empleado.ApellidoMaterno = infoTar.ApellidoMaterno || '';
        this.empleado.FechaNacimiento = moment(infoTar.FechaNacimiento).format('YYYY-MM-DD') || '';
        this.empleado.RFC = infoTar.RFC || '';

        this.tarjeta.FechaVencimiento = moment(infoTar.FechaVencimiento).format('YYYY-MM-DD') || '';
        this.tarjeta.TarjetaEstatus_Id = infoTar.TarjetaEstatus_Id || 0;
        this.tarjeta.Id_Tarjeta = infoTar.Id_Tarjeta || 0;
        this.estatusDDL.setOption(this.tarjeta.TarjetaEstatus_Id);

        this.empresaDDL.setOption(infoTar.Empresa_Id);
        this.empresa = (await this._empresaService.getEmpresa(infoTar.Empresa_Id)).Empresas[0] || {};
      } else {
        this.empleado.PrimerNombre = '';
        this.empleado.SegundoNombre = '';
        this.empleado.ApellidoPaterno = '';
        this.empleado.ApellidoMaterno = '';
        this.empleado.FechaNacimiento = '';
        this.empleado.RFC = '';
        this.tarjeta.FechaVencimiento = '';
        this.tarjeta.TarjetaEstatus_Id = 0;
        this.tarjeta.Id_Tarjeta = 0;
        this.empresaDDL.setOption(0);
        this.empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
          '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
          0, 0, new Date(), 0, new Date(), 0);
      }
    }
  }

  async modificarTarjeta() {
    try {
      let resp = await this._plasticoService.updateTarjeta(this.tarjeta, 1);
      if (resp.Exito === 1) {
        swal('Exito', 'Tarjeta Actualizada de estatus correctamente.', 'success');

        this.empleado.PrimerNombre = '';
        this.empleado.SegundoNombre = '';
        this.empleado.ApellidoPaterno = '';
        this.empleado.ApellidoMaterno = '';
        this.empleado.FechaNacimiento = '';
        this.empleado.RFC = '';
        this.tarjeta.FechaVencimiento = '';
        this.tarjeta.Id_Tarjeta = 0;
        this.tarjeta.TarjetaEstatus_Id = 0;
        this.empresaDDL.setOption(0);
        this.empresa = new Empresa('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
          '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0,
          0, 0, new Date(), 0, new Date(), 0);
      } else {
        swal('Error', resp.Err_Mensaje || resp.message, 'error');
      }
    } catch (e) {
      swal('Error', e.Err_Mensaje || e.message, 'error');
    }
  }

}
