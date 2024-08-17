import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/ApiServices';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-container-movies',
  templateUrl: './container-movies.component.html',
  styleUrls: ['./container-movies.component.css'],
})
export class ContainerMoviesComponent implements OnInit {
  movies: any[] = [];
  selectedMovie: any = null;
  private subscription: Subscription = new Subscription();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Inscreve-se nas mudanças do BehaviorSubject
    this.subscription = this.apiService.movies$.subscribe((movies) => {
      this.movies = movies;
    });

    // Carrega os filmes iniciais
    this.apiService.getMovie();
  }

  OnMovieCliked(movie: any) {
    this.selectedMovie = movie;
  }

  ngOnDestroy(): void {
    // Limpa a inscrição para evitar vazamentos de memória
    this.subscription.unsubscribe();
  }
}
