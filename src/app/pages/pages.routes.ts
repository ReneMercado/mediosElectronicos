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
        canActivate: [AdminGuard],
    },
    { path: 'contacto', component: ContactoComponent, data: { titulo: 'Contacto' } },
    { path: 'politicas', component: PoliticasComponent, data: { titulo: 'Politicas' } },
    { path: 'baja-empresa', component: BajaEmpresaComponent, data: { titulo: 'Baja-Empresa' } },
    { path: 'consulta-empresa', component: ConsultaEmpresaComponent, data: { titulo: 'Consulta-Empresa' } },
    { path: 'alta-empleado', component: AltaEmpleadoComponent, data: { titulo: 'Alta-Empleado' } },
    { path: 'baja-empleado', component: BajaEmpleadoComponent, data: { titulo: 'Baja-Empleado' } },
    { path: 'consulta-empleado', component: ConsultaEmpleadoComponent, data: { titulo: 'Consulta-Empleado' } },
    { path: 'modificacion-empleado', component: ModificacionEmpleadoComponent, data: { titulo: 'Modificacion-Empleado' } },
    { path: 'alta-plastico', component: AltaPlasticoComponent, data: { titulo: 'Alta-Plastico' } },
    { path: 'asignacion-plastico', component: AsignacionPlasticoComponent, data: { titulo: 'Asignacion-Plastico' } },
    { path: 'cambio-estatus-plastico', component: CambioEstatusPlasticoComponent, data: { titulo: 'Cambio-Estatus-Plastico' } },
    { path: 'consulta-usuario', component: ConsultaUsuariosComponent, data: { titulo: 'Consulta-Usuario' } },
    { path: 'baja-usuario', component: BajaUsuariosComponent, data: { titulo: 'Baja-Usuario' } },
    { path: '', redirectTo: '/empresa', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
