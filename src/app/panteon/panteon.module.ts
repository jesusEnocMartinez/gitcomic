import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PANTEON_ROUTES }  from './panteon.routes';

import { DifuntoComponent } from './difuntos/difunto.component';
import { ListadoDifuntosComponent } from './difuntos/listado/listado-difuntos.component';
import { EspaciosComponent } from './espacios-funerarios/espacios.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PanteonComponent } from './panteon.component';
import { RegistroComponent } from './registro/registro.component';
import { SepulturaComponent } from './sepulturas/sepultura.component';
import { ListadoSepulturasComponent } from './sepulturas/listado/listado-sepulturas.component';
import { SharedModule } from '../shared/shared.module';
import { VisitaComponent } from './visitas/visita.component';
import { ListadoVisitasComponent } from './visitas/listado/listado-visitas.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

@NgModule({
    declarations: [
        DifuntoComponent,
        ListadoDifuntosComponent,
        EspaciosComponent,
        InicioComponent,
        LoginComponent,
        PanteonComponent,
        RegistroComponent,
        SepulturaComponent,
        ListadoSepulturasComponent,
        VisitaComponent,
        ListadoVisitasComponent,
        UbicacionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PANTEON_ROUTES,
        ReactiveFormsModule,
        SharedModule
    ],
    exports:[
        DifuntoComponent,
        ListadoDifuntosComponent,
        EspaciosComponent,
        InicioComponent,
        LoginComponent,
        PanteonComponent,
        RegistroComponent,
        SepulturaComponent,
        ListadoSepulturasComponent,
        VisitaComponent,
        ListadoVisitasComponent,
        UbicacionComponent
    ]
})
export class PanteonModule { }