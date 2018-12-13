import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';

// ANGULAR MAPS
import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyA69zEC2QW7RrJjVFB_NfJbsMgCBR-p-t0'
        }),
    ],
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        LoaderComponent,
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        LoaderComponent,
    ]
})
export class SharedModule { }
