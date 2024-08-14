import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/ApiServices'; // Supondo que o serviço esteja na pasta 'src/app/'

@Component({
  selector: 'app-container-movies',
  templateUrl: './container-movies.component.html',
  styleUrls: ['./container-movies.component.css'], // Corrigido styleUrl para styleUrls
})
export class ContainerMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMovie().then((data) => {
      this.movies = data;
    });
  }
}
