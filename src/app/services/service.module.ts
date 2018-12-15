import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { LoaderService } from '../shared/loader/loader.service';

import {
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    RolesGuard,
    RolService,
    SucursalService,
    VisitaService,
    TipoVisitaService,
    ZonasService,
    AuthInterceptor
} from './service.index';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        UsuarioService,
        LoginGuardGuard,
        AdminGuard,
        RolesGuard,
        RolService,
        SucursalService,
        VisitaService,
        TipoVisitaService,
        ZonasService,
        LoaderService,
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
