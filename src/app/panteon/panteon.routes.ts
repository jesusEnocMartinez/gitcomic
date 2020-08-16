import { RouterModule, Routes } from '@angular/router';

import { DifuntoComponent } from './difuntos/difunto.component';
import { EspaciosComponent } from './espacios-funerarios/espacios.component';
import { InicioComponent } from './inicio/inicio.component';
import { PanteonComponent } from './panteon.component';
import { SepulturaComponent } from './sepulturas/sepultura.component';
import { VisitaComponent } from './visitas/visita.component';
import { ListadoDifuntosComponent } from './difuntos/listado/listado-difuntos.component';
import { ListadoSepulturasComponent } from './sepulturas/listado/listado-sepulturas.component';
import { ListadoVisitasComponent } from './visitas/listado/listado-visitas.component';

const panteonRoutes: Routes = [
    {
        path: 'panteon',
        component: PanteonComponent,
        children: [
            { path: 'difuntos', component: ListadoDifuntosComponent },
            { path: 'registrar-difunto', component: DifuntoComponent },
            { path: 'espacios-funerarios', component: EspaciosComponent },
            { path: 'inicio', component: InicioComponent },
            { path: 'sepulturas', component: ListadoSepulturasComponent },
            { path: 'registrar-sepultura', component: SepulturaComponent },
            { path: 'visitas', component: ListadoVisitasComponent },
            { path: 'registrar-visita', component: VisitaComponent },
            { path: '', redirectTo: '/panteon/inicio', pathMatch: 'full' }
        ]
    }
]

export const PANTEON_ROUTES = RouterModule.forChild(panteonRoutes);