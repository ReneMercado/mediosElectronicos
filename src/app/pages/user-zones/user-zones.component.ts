import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService, SucursalService, RolService, ZonasService } from '../../services/service.index';
import { InputSelectComponent } from '../../components/input-select/input-select.component';
import { Usuario } from '../../models/usuario.model';
import { Usuariocp } from '../../models/usuariocp.model';
import { promise } from 'protractor';

@Component({
  selector: 'app-user-zones',
  templateUrl: './user-zones.component.html',
  styleUrls: []
})
export class UserZonesComponent implements OnInit {
  @ViewChild('userGrid1') userGrid1: any;
  @ViewChild('userGrid2') userGrid2: any;
  @ViewChild('estadosAddDDL') estadosAddDDL: InputSelectComponent;
  @ViewChild('municipiosAddDDL') municipiosAddDDL: InputSelectComponent;
  @ViewChild('agentesAddDDL') agentesAddDDL: InputSelectComponent;

  obj = new Usuariocp()

  selectValE = null;
  selectValM = null;
  selectValA = null;

  rowData: any;
  rowData2: any;



  columnDefs = [
    { headerName: 'CP', field: 'CP', width: 70 },
    { headerName: 'NoUsuario', field: 'Usuario_Id', width: 130 },
    { headerName: 'Usuario', field: 'Nombre', width: 200 },
    {
      headerName: '', field: '', width: 80, suppressResize: true, suppressSorting: true, suppressMenu: true,
      cellRenderer: this.editCellRendererFunc.bind(this)
    }
  ];

  columnDefs2 = [
    { headerName: 'CP', field: 'CP', width: 70 },
    { headerName: 'NoUsuario', field: 'Usuario_Id', width: 130 },
    { headerName: 'Usuario', field: 'Nombre', width: 200 },
    {
      headerName: '', field: '', width: 80, suppressResize: true, suppressSorting: true, suppressMenu: true,
      cellRenderer: this.editCellRendererFunc2.bind(this)
    }
  ];

  constructor(public _usuarioService: UsuarioService, public _sucursalService: SucursalService,
    public _rolService: RolService, public _zonaservice: ZonasService) { }

  ngOnInit() {
    let estados;
    this._zonaservice.getEstados().subscribe((resp) => {
      estados = resp
      this.estadosAddDDL.changeOptions(estados);
    });

    let agentes;
    this._zonaservice.getAgentes().subscribe((resp) => {
      agentes = resp
      this.agentesAddDDL.changeOptions(agentes);
    });
    
    $("#Asociar").on('click', (function () {
      var cont = 0;
      $('input[ID*="Asociar"]').each(function () {
        if ($(this).is(':checked')) {
          cont = 1;
        }
      });

      if (cont == 0) {
        swal('Error', "Para asociar se necesita seleccionar un Código Postal");
        return;
      }

      if (this.selectValA == null) {
        swal('Error', "No se ha seleccionado el Agente");
        return;
      }

      var listacp = [];
      $('input[ID*="Asociar"]').each(function () {
        if ($(this).is(':checked')) {
          listacp.push($(this).val())
        }

      });

      this.obj.ListaCP = listacp;
      this.obj.Id_Usuario = this.selectValA;
      this.obj.Id_UsuarioAlta = 1;

       this._zonaservice.AsignacionCPUsuario(this.obj).subscribe((resp) => {
        if (resp.Exito == 1) {
          swal('Éxito', resp.Err_Mensaje);
          this._zonaservice.getCPMunicipio(this.selectValM).subscribe((resp) => {
            this.rowData = resp
          });
          this._zonaservice.CPUsuario(this.selectValA).subscribe((resp) => {
            this.rowData2 = resp
          });
          cont = 0
          $("#All").prop('checked', false);
          $("#All2").prop('checked', false);
        } else if (resp.Exito == 0) {
          swal('Error', resp.Err_Mensaje);
        }
      });

    }).bind(this));


    $("#Desasociar").on('click', (function () {
      var cont = 0;
      $('input[ID*="Desasignar"]').each(function () {
        if ($(this).is(':checked')) {
          cont = 1;
        }
      });

      if (this.selectValA == null) {
        swal('Error', "No se ha seleccionado el Agente");
        return;
      }

      if (cont == 0) {
        swal('Error', "Para desasociar se necesita seleccionar un Código Postal");
        return;
      }


      var listacp = [];
      $('input[ID*="Desasignar"]').each(function () {
        if ($(this).is(':checked')) {
          listacp.push($(this).val())
        }

      });

      this.obj.ListaCP = listacp;
      this.obj.Id_Usuario = this.selectValA;
      this.obj.Id_UsuarioBaja = 1;

      this._zonaservice.DesasociacionCPUsuario(this.obj).subscribe((resp) => {
        if (resp.Exito == 1) {
          swal('Éxito', resp.Err_Mensaje);
          this._zonaservice.getCPMunicipio(this.selectValM).subscribe((resp) => {
            this.rowData = resp
          });
          this._zonaservice.CPUsuario(this.selectValA).subscribe((resp) => {
            this.rowData2 = resp
          });
          cont = 0;
          $("#All").prop('checked', false);
          $("#All2").prop('checked', false);
        } else if (resp.Exito == 0) {
          swal('Error', resp.Err_Mensaje);
        }
      });


    }).bind(this));

    $("#All").on('click', function () {
      if ($(this).is(':checked')) {
        $('input[ID*="Asociar"]').each(function () {
          $(this).prop('checked', true);
        });
      } else {
        $('input[ID*="Asociar"]').each(function () {
          $(this).prop('checked', false);

        });
      }

    });

    $("#All2").on('click', function () {
      if ($(this).is(':checked')) {
        $('input[ID*="Desasignar"]').each(function () {
          $(this).prop('checked', true);
        });
      } else {
        $('input[ID*="Desasignar"]').each(function () {
          $(this).prop('checked', false);

        });
      }

    });

  }

  editCellRendererFunc(params) {
    let registro = params;
    let newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.id = 'Asociar';
    newCheckBox.value = registro.data.CP;

    if (registro.data.Usuario_Id == '') {
      return newCheckBox;
    }

  }

  editCellRendererFunc2(params) {
    let registro = params;
    let newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.id = 'Desasignar';
    newCheckBox.value = registro.data.CP;

    return newCheckBox;
  }

  onEstadoChanged($event) {
    this.selectValE = $event;
    let municipios;
    this._zonaservice.getMunicipios($event).subscribe((resp) => {
      municipios = resp
      this.municipiosAddDDL.changeOptions(municipios);
    });
  }


  onMunicipioChanged($event) {
    this.selectValM = $event;
    this._zonaservice.getCPMunicipio($event).subscribe((resp) => {
      this.rowData = resp
    });
  }

  onAgenteChanged($event) {
    this.selectValA = $event;
    this._zonaservice.CPUsuario($event).subscribe((resp) => {
      this.rowData2 = resp
    });
  }



  
}
