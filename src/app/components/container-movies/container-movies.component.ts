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
  loading: boolean = true;
  private subscription: Subscription = new Subscription();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.subscription = this.apiService.movies$.subscribe((movies) => {
        this.movies = movies;
        this.loading = false;
      });

      this.apiService.getMovie();
    }, 1000);
  }

  loadMovies() {
    this.loading = true;
    this.apiService.getMovie();
  }

  OnMovieCliked(movie: any) {
    this.selectedMovie = movie;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
