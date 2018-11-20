
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

// AG-GRID
import { AgGridModule } from 'ag-grid-angular';

// ANGULAR MAPS
import { AgmCoreModule } from '@agm/core';


import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitsComponent } from './visits/visits.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';
import { UsersComponent } from './users/users.component';
import { UserZonesComponent } from './user-zones/user-zones.component';

// Pipe Module
// import { PipesModule } from '../pipes/pipes.module';

// COMPONENTES
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { MasInputTextComponent } from '../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../components/input-select/input-select.component';
import { GridComponent } from '../components/grid/grid.component';
import 'ag-grid-enterprise';
import { InputFileComponent } from '../components/input-file/input-file.component';
import { MapComponent } from '../components/map/map.component';
import { ZoomImageComponent } from '../components/zoom-image/zoom-image.component';
import { NombreNuevoComponent } from './nombre-nuevo/nombre-nuevo.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { BajaEmpresaComponent } from './baja-empresa/baja-empresa.component';
import { AltaEmpleadoComponent } from './alta-empleado/alta-empleado.component';
import { BajaEmpleadoComponent } from './baja-empleado/baja-empleado.component';
import { ModificacionEmpleadoComponent } from './modificacion-empleado/modificacion-empleado.component';


// import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
// import { ProfileComponent } from './profile/profile.component';
// import { UsuariosComponent } from './usuarios/usuarios.component';
// import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
// import { HospitalesComponent } from './hospitales/hospitales.component';
// import { MedicosComponent } from './medicos/medicos.component';
// import { MedicoComponent } from './medicos/medico.component';
// import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
    declarations: [
        DashboardComponent,
        // COMPONENTES
        GraficoDonaComponent,
        IncrementadorComponent,
        MasInputTextComponent,
        GridComponent,
        InputSelectComponent,
        InputFileComponent,
        MapComponent,
        ZoomImageComponent,
        // END COMPONENTES
        VisitsComponent,
        VisitDetailComponent,
        UsersComponent,
        UserZonesComponent,
        NombreNuevoComponent,
        EmpresaComponent,
        ContactoComponent,
        PoliticasComponent,
        BajaEmpresaComponent,
        AltaEmpleadoComponent,
        BajaEmpleadoComponent,
        ModificacionEmpleadoComponent,
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        AgGridModule.withComponents([]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA69zEC2QW7RrJjVFB_NfJbsMgCBR-p-t0'
        })
    ]
})
export class PagesModule { }
