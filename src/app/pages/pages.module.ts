
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// AG-GRID
import { AgGridModule } from 'ag-grid-angular';

import { DashboardComponent } from './dashboard/dashboard.component';

// Pipe Module
// import { PipesModule } from '../pipes/pipes.module';

// COMPONENTES
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { MasInputTextComponent } from '../components/mas-input-text/mas-input-text.component';
import { InputSelectComponent } from '../components/input-select/input-select.component';
import { GridComponent } from '../components/grid/grid.component';
// import 'ag-grid-enterprise';
import { InputFileComponent } from '../components/input-file/input-file.component';
import { MapComponent } from '../components/map/map.component';
import { ZoomImageComponent } from '../components/zoom-image/zoom-image.component';
import { EmpresaComponent } from './Empresas/empresa/empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { BajaEmpresaComponent } from './Empresas/baja-empresa/baja-empresa.component';
import { AltaEmpleadoComponent } from './Empleados/alta-empleado/alta-empleado.component';
import { BajaEmpleadoComponent } from './Empleados/baja-empleado/baja-empleado.component';
import { ModificacionEmpleadoComponent } from './Empleados/modificacion-empleado/modificacion-empleado.component';
import { ConsultaEmpleadoComponent } from './Empleados/consulta-empleado/consulta-empleado.component';
import { ConsultaEmpresaComponent } from './Empresas/consulta-empresa/consulta-empresa.component';
import { AltaPlasticoComponent } from './Plasticos/alta-plastico/alta-plastico.component';
import { ConsultaUsuariosComponent } from './Usuarios/consulta-usuarios/consulta-usuarios.component';
import { BajaUsuariosComponent } from './Usuarios/baja-usuarios/baja-usuarios.component';
import { AsignacionPlasticoComponent } from './Plasticos/asignacion-plastico/asignacion-plastico.component';
import { CambioEstatusPlasticoComponent } from './Plasticos/cambio-estatus-plastico/cambio-estatus-plastico.component';
import { AsignacionMasivaPlasticosComponent } from './Plasticos/asignacion-masiva-plasticos/asignacion-masiva-plasticos.component';
import { ModificacionEmpresaComponent } from './Empresas/modificacion-empresa/modificacion-empresa.component';
import { ActivacionPlasticoComponent } from './CallCenter/activacion-plastico/activacion-plastico.component';
import { BloquearPlasticoComponent } from './CallCenter/bloquear-plastico/bloquear-plastico.component';
import { AutenticacionComponent } from './CallCenter/autenticacion/autenticacion.component';
import { ConsultaMovimientosComponent } from './CallCenter/consulta-movimientos/consulta-movimientos.component';
import { CambioNipComponent } from './CallCenter/cambio-nip/cambio-nip.component';

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
        EmpresaComponent,
        ContactoComponent,
        PoliticasComponent,
        BajaEmpresaComponent,
        AltaEmpleadoComponent,
        BajaEmpleadoComponent,
        ModificacionEmpleadoComponent,
        ConsultaEmpleadoComponent,
        ConsultaEmpresaComponent,
        AltaPlasticoComponent,
        ConsultaUsuariosComponent,
        BajaUsuariosComponent,
        AsignacionPlasticoComponent,
        CambioEstatusPlasticoComponent,
        AsignacionMasivaPlasticosComponent,
        ModificacionEmpresaComponent,
        ActivacionPlasticoComponent,
        BloquearPlasticoComponent,
        AutenticacionComponent,
        ConsultaMovimientosComponent,
        CambioNipComponent,
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        AgGridModule.withComponents([])
    ]
})
export class PagesModule { }
