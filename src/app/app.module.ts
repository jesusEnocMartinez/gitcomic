import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routing';

import { AppComponent } from './app.component';

import { PanteonModule } from './panteon/panteon.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    SharedModule,
    PanteonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
