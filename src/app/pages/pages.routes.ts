import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './Empresas/empresa/empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { BajaEmpresaComponent } from './Empresas//baja-empresa/baja-empresa.component';
import { AltaEmpleadoComponent } from './Empleados//alta-empleado/alta-empleado.component';
import { BajaEmpleadoComponent } from './Empleados/baja-empleado/baja-empleado.component';
import { ModificacionEmpleadoComponent } from './Empleados/modificacion-empleado/modificacion-empleado.component';


// Guards
// import { LoginGuardGuard } from '../services/service.index';
// import { AdminGuard } from '../services/service.index';
// import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';
import { ConsultaEmpleadoComponent } from './Empleados/consulta-empleado/consulta-empleado.component';
import { ConsultaEmpresaComponent } from './Empresas/consulta-empresa/consulta-empresa.component';
import { AltaPlasticoComponent } from './Plasticos/alta-plastico/alta-plastico.component';
import { ConsultaUsuariosComponent } from './Usuarios/consulta-usuarios/consulta-usuarios.component';
import { BajaUsuariosComponent } from './Usuarios/baja-usuarios/baja-usuarios.component';
import { AsignacionPlasticoComponent } from './Plasticos/asignacion-plastico/asignacion-plastico.component';
import { CambioEstatusPlasticoComponent } from './Plasticos/cambio-estatus-plastico/cambio-estatus-plastico.component';
import { AdminGuard } from '../services/guards/admin.guard';
import { AsignacionMasivaPlasticosComponent } from './Plasticos/asignacion-masiva-plasticos/asignacion-masiva-plasticos.component';
import { ModificacionEmpresaComponent } from './Empresas/modificacion-empresa/modificacion-empresa.component';
import { RolesGuard } from '../services/guards/roles.guard';


const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [ VerificaTokenGuard ], SE REQUIERE PONER EN TODAS LAS PANTALLAS QUE REQUIERAN TOKEN
        data: { titulo: 'Dashboard' }
    },
    {
        path: 'empresa',
        component: EmpresaComponent,
        data: { titulo: 'Empresas' },
        canActivate: [RolesGuard],
    },
    { path: 'baja-empresa', component: BajaEmpresaComponent, data: { titulo: 'Baja-Empresa' }, canActivate: [RolesGuard] },
    { path: 'consulta-empresa', component: ConsultaEmpresaComponent, data: { titulo: 'Consulta-Empresa' }, canActivate: [RolesGuard] },
    {
        path: 'modificacion-empresa', component: ModificacionEmpresaComponent,
        data: { titulo: 'Modificacion-Empleado' }, canActivate: [RolesGuard]
    },
    { path: 'alta-empleado', component: AltaEmpleadoComponent, data: { titulo: 'Alta-Empleado' }, canActivate: [RolesGuard] },
    { path: 'baja-empleado', component: BajaEmpleadoComponent, data: { titulo: 'Baja-Empleado' }, canActivate: [RolesGuard] },
    { path: 'consulta-empleado', component: ConsultaEmpleadoComponent, data: { titulo: 'Consulta-Empleado' }, canActivate: [RolesGuard] },
    {
        path: 'modificacion-empleado', component: ModificacionEmpleadoComponent,
        data: { titulo: 'Modificacion-Empleado' }, canActivate: [RolesGuard]
    },
    { path: 'alta-plastico', component: AltaPlasticoComponent, data: { titulo: 'Alta-Plastico' }, canActivate: [RolesGuard] },
    {
        path: 'asignacion-plastico', component: AsignacionPlasticoComponent,
        data: { titulo: 'Asignacion-Plastico' }, canActivate: [RolesGuard]
    },
    {
        path: 'asignacion-masiva-plastico', component: AsignacionMasivaPlasticosComponent,
        data: { titulo: 'Asignacion-Masiva-Plastico' }, canActivate: [RolesGuard]
    },
    {
        path: 'cambio-estatus-plastico', component: CambioEstatusPlasticoComponent,
        data: { titulo: 'Cambio-Estatus-Plastico' }, canActivate: [RolesGuard]
    },
    { path: 'consulta-usuario', component: ConsultaUsuariosComponent, data: { titulo: 'Consulta-Usuario' }, canActivate: [RolesGuard] },
    { path: 'baja-usuario', component: BajaUsuariosComponent, data: { titulo: 'Baja-Usuario' }, canActivate: [RolesGuard] },
    { path: '', redirectTo: '/empresa', pathMatch: 'full', canActivate: [RolesGuard] }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
