import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { MasInputTextComponent } from '../../../components/mas-input-text/mas-input-text.component';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/service.index';
import { RolService } from '../../../services/rol/rol.service';

@Component({
    selector: 'app-consulta-usuarios',
    templateUrl: './consulta-usuarios.component.html',
    styles: []
})
export class ConsultaUsuariosComponent implements OnInit {

    @ViewChild('userGrid') userGrid: any;
    @ViewChild('editModal') editModal: ElementRef;
    @ViewChild('addModal') addModal: ElementRef;

    @ViewChild('rolEditDDL') rolEditDDL: InputSelectComponent;
    @ViewChild('nombreEdit') nombreEdit: MasInputTextComponent;
    @ViewChild('correoEdit') correoEdit: MasInputTextComponent;
    @ViewChild('aliasEdit') aliasEdit: MasInputTextComponent;

    @ViewChild('rolAddDDL') rolAddDDL: InputSelectComponent;
    @ViewChild('nombreAdd') nombreAdd: MasInputTextComponent;
    @ViewChild('correoAdd') correoAdd: MasInputTextComponent;
    @ViewChild('aliasAdd') aliasAdd: MasInputTextComponent;

    usuarios: Usuario[] = [];
    usuario: Usuario = new Usuario('', 0, 0, '', 0, new Date(), new Date(), new Date(), 0, '', '',
        '', '', 0, '', '', '', '', '');

    selectedRol: string = '';

    selectVal = '';

    columnDefs = [
        {
            headerName: '', field: '', width: 50, suppressResize: true, suppressSorting: true, suppressMenu: true,
            cellRenderer: this.editCellRendererFunc.bind(this)
        },
        { headerName: 'Ultimo Acceso', field: 'Fec_UltAcceso', valueFormatter: (data) => this.userGrid.dateFormatter(data) },
        { headerName: 'Alias', field: 'Alias', width: 300 },
        { headerName: 'Correo', field: 'Correo', width: 300 },
        { headerName: 'Rol', field: 'Rol' },
        { headerName: 'Estatus', field: 'Estatus', cellRenderer: this.EstatusRenderer.bind(this) }
    ];


    constructor(public _usuarioService: UsuarioService,
        public _rolService: RolService) { }

    async ngOnInit() {
        let roles = await this._rolService.getRoles();
        this.rolEditDDL.changeOptions(roles);
        this.rolAddDDL.changeOptions(roles);

        this.usuarios = await this.getUsers();
    }


    EstatusRenderer(params) {
        if (params.node.data.Estatus === 1) {
            return 'Activo';
        } else if (params.node.data.Estatus === 0) {
            return 'Inactivo';
        }

        return params.node.data.Estatus;
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

    async getUsers() {
        // this.userGrid.showLoadingOverlay();
        return await this._usuarioService.getUsers();
    }

    async onEditModalOpen(event, user) {
        try {
            this.usuario = user;
            $('#editModalLabel').text('Editar Usuario: ' + this.usuario.Alias);
            $('#editModal').modal('show');

            this.rolEditDDL.setOption(this.usuario.Rol_Id);
        } catch (e) {
            console.log(e);
        }
    }

    onAddModalOpen() {
        this.usuario = new Usuario('', 0, 0, '', 0, new Date(), new Date(), new Date(), 0, '', '',
            '', '', 0, '', '', '', '', '');

        this.rolAddDDL.setOption(0);
        $('#addModal').modal('show');
    }

    async onUpdateUser(user: Usuario) {
        try {

            if (!this.nombreEdit.valid() || !this.correoEdit.valid() || !this.aliasEdit.valid()
                || !this.rolEditDDL.valid()) {
                swal('Campos Requeridos', 'Favor de llenar los campos correctamente', 'error');
                return false;
            }
            await this._usuarioService.updateUser(user);
            this.usuarios = await this.getUsers();
            $('#editModal').modal('hide');
        } catch (e) {
            swal('Error', e.message, 'error');
        }
    }

    async onCreateUser(user: Usuario) {
        try {

            if (!this.nombreAdd.valid() || !this.correoAdd.valid() || !this.aliasAdd.valid()
                || !this.rolAddDDL.valid()) {
                swal('Campos Requeridos', 'Favor de llenar los campos correctamente', 'error');
                return false;
            }

            await this._usuarioService.createUser(user);
            this.usuarios = await this.getUsers();
            $('#addModal').modal('hide');
        } catch (e) {
            swal('Error', e.message, 'error', 'error');
        }
    }

}
