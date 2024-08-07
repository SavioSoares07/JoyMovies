import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@NgModule({
  declarations: [AppComponent, HeaderMenuComponent],
  imports: [BrowserModule, AppRoutingModule, AngularMaterialModule],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
