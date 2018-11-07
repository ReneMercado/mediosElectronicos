import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { VisitaService } from '../../services/visita/visita.service';
import { Visita } from '../../models/visita.model';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { InputSelectComponent } from '../../components/input-select/input-select.component';
import { TipoVisitaService } from '../../services/tipo-visita/tipo-visita.service';
import { InputFileComponent } from '../../components/input-file/input-file.component';
import { CargaMasivaVisita } from '../../models/cargaMasivaVisita.model';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styles: []
})
export class VisitsComponent implements OnInit {

  columnDefs = [
    { headerName: 'Fecha Visita Creada', field: 'FechaVisitaCreada', valueFormatter: (data) => this.gridVisit.dateFormatter(data) },
    {
      headerName: 'Folio', field: 'Folio', cellRenderer: this.folioCellRendererFunc.bind(this)
    },
    {
      headerName: 'Agente', field: 'Usuario'
    },
    {
      headerName: 'Municipio', field: 'Municipio'
    },
    {
      headerName: 'Estado', field: 'Estado'
    },
    {
      headerName: 'Estatus', field: 'EstatusTexto'
    }
  ];
  rowData = [];

  @ViewChild('gridVisit') gridVisit: any;

  // tslint:disable-next-line:max-line-length
  visita = new Visita(0, 0, '', '', 0, '', 0, '', '', '', '', '', '', 0, 0, '', '', '', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', new Date(), new Date(), 0, 0, 1);

  cargaMasiva = new CargaMasivaVisita(0, '');

  filtros = {
    FechaInicioVisitaCreada: new Date('01/01/0001 12:00:00 a. m.'),
    FechaFinVisitaCreada: new Date('01/01/0001 12:00:00 a. m.'),
    FechaInicioVisitaConcluida: new Date('01/01/0001 12:00:00 a. m.'),
    FechaFinVisitaConcluida: new Date('01/01/0001 12:00:00 a. m.'),
    Id_Usuario: 0,
    Estatus: 1
  };

  @ViewChild('usersDDL') usersDDL: InputSelectComponent;
  @ViewChild('visitTypeDDL') visitTypeDDL: InputSelectComponent;
  @ViewChild('inputFile') inputFile: InputFileComponent;

  constructor(public router: Router, public _visitaService: VisitaService,
    public _usuarioService: UsuarioService, public _tipoVisitaService: TipoVisitaService,
    public _loaderService: LoaderService) { }

  ngOnInit() {
    this._visitaService.getVisits(this.filtros).subscribe((resp) => {
      this.rowData = resp.Table;
    });

    this._usuarioService.getUsers().subscribe((resp) => {
      this.usersDDL.changeOptions(resp);
    });

    this._tipoVisitaService.getVisitTypes().subscribe((resp) => {
      this.visitTypeDDL.changeOptions(resp);
    });

    $('#addModal').on('hidden.bs.modal', (function () {
      this.visitTypeDDL.setOption(0);
      this.inputFile.reset();
      this.cargaMasiva = new CargaMasivaVisita(0, '');
    }).bind(this));
  }

  openModalVisits() {
    $('#addModal').modal('show');
  }

  folioCellRendererFunc(params) {
    let button = document.createElement('a');
    button.text = params.node.data.Folio;
    button.setAttribute('href', 'javascript:void()');
    button.addEventListener('click', (e) => {
      let navigationExtras: NavigationExtras = {
        queryParams: params.node.data
      };
      this.router.navigate(['/visitDetail'], navigationExtras);
    });

    return button;
  }

  onFilter() {
    this._loaderService.show();
    this._visitaService.getVisits(this.filtros).subscribe((res) => {
      this._loaderService.hide();
      this.rowData = res.Table;
    });
  }

  async onAddVisits() {
    try {
      await this._visitaService.uploadCreateVisits(this.cargaMasiva);
      this._visitaService.getVisits(this.filtros).subscribe((res) => {
        this.rowData = res.Table;
      });
      $('#addModal').modal('hide');
    } catch (e) {
      swal('Error', e.Err_Mensaje);
    }
  }
}
