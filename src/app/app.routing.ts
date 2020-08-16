import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './panteon/login/login.component';
import { RegistroComponent } from './panteon/registro/registro.component';
import { UbicacionComponent } from './panteon/ubicacion/ubicacion.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: '**', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });