import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AdMoviesComponent } from './ad-movies/ad-movies.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [HeaderMenuComponent, AdMoviesComponent],

  imports: [AngularMaterialModule],
  exports: [HeaderMenuComponent, AdMoviesComponent],
})
export class ComponentsModule {}
