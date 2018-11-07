import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService, SucursalService, RolService } from '../../services/service.index';
import { InputSelectComponent } from '../../components/input-select/input-select.component';
import { Usuario } from '../../models/usuario.model';
import { promise } from 'protractor';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';
import { MasInputTextComponent } from '../../components/mas-input-text/mas-input-text.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  @ViewChild('userGrid') userGrid: any;
  @ViewChild('editModal') editModal: ElementRef;
  @ViewChild('addModal') addModal: ElementRef;

  @ViewChild('sucEditDDL') sucEditDDL: InputSelectComponent;
  @ViewChild('rolEditDDL') rolEditDDL: InputSelectComponent;

  @ViewChild('sucAddDDL') sucAddDDL: InputSelectComponent;
  @ViewChild('rolAddDDL') rolAddDDL: InputSelectComponent;
  @ViewChild('nombreAdd') nombreAdd: MasInputTextComponent;
  @ViewChild('correoAdd') correoAdd: MasInputTextComponent;
  @ViewChild('aliasAdd') aliasAdd: MasInputTextComponent;

  usuarios: Usuario[] = [];
  usuario: Usuario = new Usuario('', 0, 0, '', 0, new Date(), new Date(), new Date(), 0, '', '', '', '', 0, '', '', '');

  selectedRol: string = '';

  selectVal = '';

  columnDefs = [
    {
      headerName: '', field: '', width: 50, suppressResize: true, suppressSorting: true, suppressMenu: true,
      cellRenderer: this.editCellRendererFunc.bind(this)
    },
    { headerName: 'Ultimo Acceso', field: 'Fec_UltAcceso', valueFormatter: (data) => this.userGrid.dateFormatter(data) },
    { headerName: 'Alias', field: 'Alias' },
    { headerName: 'Correo', field: 'Correo' },
    { headerName: 'Rol', field: 'Rol' },
    { headerName: 'Sucursal', field: 'Sucursal' },
    { headerName: 'Estatus', field: 'Estatus' }
  ];

  constructor(public _usuarioService: UsuarioService, public _sucursalService: SucursalService,
    public _rolService: RolService) { }

  async ngOnInit() {
    this.getUsers();
    let sucursales = await this._sucursalService.getSucursales();
    this.sucEditDDL.changeOptions(sucursales);
    this.sucAddDDL.changeOptions(sucursales);


    let roles = await this._rolService.getRoles();
    this.rolEditDDL.changeOptions(roles);
    this.rolAddDDL.changeOptions(roles);
    // $(this.editModal.nativeElement).on('show.bs.modal', ((event) => this.onEditModalOpen(event)).bind(this));
  }

  editCellRendererFunc(params) {
    const html = '<button type="button" class="btn-default btnCat" aria-label="Left Align" data-toggle="modal"' +
      `data-target="#editModal"  data-user='${JSON.stringify(params.node.data)}'>` +
      '<i class="fas fa-pencil-alt"></i>' +
      '</button>';

    let button = document.createElement('button');
    button.classList.add('btn-default', 'btnCat');
    button.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    button.addEventListener('click', (e) => this.onEditModalOpen(e, params.node.data));

    return button;
  }

  onSucChanged($event) {
    // console.log($event);
  }


  onRolChanged($event) {
    // console.log($event);
  }

  getUsers() {
    // this.userGrid.showLoadingOverlay();
    this._usuarioService.getUsers().subscribe((resp: any) => {

      if (resp.length === 0) {
        console.log('No hay usuarios!');
      }

      this.usuarios = resp;
    });
  }

  async onEditModalOpen(event, user) {
    try {
      this.usuario = user;
      $('#editModalLabel').text('Editar Usuario: ' + this.usuario.Alias);
      $('#editModal').modal('show');

      this.sucEditDDL.setOption(this.usuario.Sucursal_Id);
      this.rolEditDDL.setOption(this.usuario.Rol_Id);
    } catch (e) {
      console.log(e);
    }
  }

  onAddModalOpen() {
    this.usuario = new Usuario('', 0, 0, '', 0, new Date(), new Date(), new Date(), 0, '', '', '', '', 0, '', '', '');

    this.sucAddDDL.setOption(0);
    this.rolAddDDL.setOption(0);
    $('#addModal').modal('show');
  }

  async onUpdateUser(user: Usuario) {
    try {
      await this._usuarioService.updateUser(user);
      await this.getUsers();
      $('#editModal').modal('hide');
    } catch (e) {
      swal('Error', e.message);
    }
  }

  async onCreateUser(user: Usuario) {
    try {

      if (!this.nombreAdd.valid() || !this.correoAdd.valid() || !this.aliasAdd.valid() || !this.rolAddDDL.valid()) {
        swal('Campos Requeridos', 'Favor de llenar los campos correctamente', 'error');
        return false;
      }

      console.log('aun siguio');
      await this._usuarioService.createUser(user);
      await this.getUsers();
      $('#addModal').modal('hide');
    } catch (e) {
      swal('Error', e.message, 'error');
    }
  }
}
