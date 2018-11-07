import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { LoaderService } from '../shared/loader/loader.service';

import {
    // SettingsService,
    // SidebarService,
    // SharedService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    RolService,
    SucursalService,
    VisitaService,
    TipoVisitaService,
    ZonasService
    // SubirArchivoService,
    // HospitalService,
    // MedicoService,
    // VerificaTokenGuard
} from './service.index';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        UsuarioService,
        LoginGuardGuard,
        AdminGuard,
        RolService,
        SucursalService,
        VisitaService,
        TipoVisitaService,
        ZonasService,
        LoaderService
        // SharedService,
        // SubirArchivoService,
        // ModalUploadService,
        // HospitalService,
        // MedicoService,
        // VerificaTokenGuard
    ],
    declarations: []
})
export class ServiceModule { }
