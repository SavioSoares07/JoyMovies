import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicionado
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AdMoviesComponent } from './ad-movies/ad-movies.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ContainerMoviesComponent } from './container-movies/container-movies.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { PipesModule } from '../../Pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    AdMoviesComponent,
    ContainerMoviesComponent,
    CardMovieComponent,
  ],
  imports: [
    CommonModule, // Adicionado
    AngularMaterialModule,
    PipesModule,
  ],
  exports: [
    HeaderMenuComponent,
    AdMoviesComponent,
    ContainerMoviesComponent,
    CardMovieComponent,
  ],
})
export class ComponentsModule {}
