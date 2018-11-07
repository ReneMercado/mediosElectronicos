import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitsComponent } from './visits/visits.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';
import { UsersComponent } from './users/users.component';
import { UserZonesComponent } from './user-zones/user-zones.component';

// import { ProgressComponent } from './progress/progress.component';
// import { Graficas1Component } from './graficas1/graficas1.component';
// import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';

// import { ProfileComponent } from './profile/profile.component';

// Guards
// import { LoginGuardGuard } from '../services/service.index';
// import { AdminGuard } from '../services/service.index';

// import { UsuariosComponent } from './usuarios/usuarios.component';
// import { HospitalesComponent } from './hospitales/hospitales.component';
// import { MedicosComponent } from './medicos/medicos.component';
// import { MedicoComponent } from './medicos/medico.component';
// import { BusquedaComponent } from './busqueda/busqueda.component';
// import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';


const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [ VerificaTokenGuard ], SE REQUIERE PONER EN TODAS LAS PANTALLAS QUE REQUIERAN TOKEN
        data: { titulo: 'Dashboard' }
    },
    { path: 'visits', component: VisitsComponent, data: { titulo: 'Visitas' } },
    { path: 'visitDetail', component: VisitDetailComponent, data: { titulo: 'Detalle-Visita' } },
    { path: 'users', component: UsersComponent, data: { titulo: 'Usuarios' } },
    { path: 'userzones', component: UserZonesComponent, data: { titulo: 'Asignacion-Rutas' } },
    // { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    // { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    // { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    // { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    // {
    //     path: 'usuarios',
    //     component: UsuariosComponent,
    //     canActivate: [AdminGuard],
    //     data: { titulo: 'Mantenimiento de Usuarios' }
    // },
    // { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    // { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Médicos' } },
    // { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
