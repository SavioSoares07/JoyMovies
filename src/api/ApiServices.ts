// src/app/api.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private Settings = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGVlMjMwNGY3NDkyMjZkODdkYjZkYzE0OGM3MTI2ZCIsIm5iZiI6MTcyMzY0NjY3OC42MDMwMDEsInN1YiI6IjYyNGQ5MTNjMGQxZTdmMDA2NmY1NzlhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3_9Pf7-yeWh9avGF9pThoWUBA_hNkHlRfDFAsKLYhT0',
    },
  };

  private URL_API =
    'https://api.themoviedb.org/3/movie/now_playing?language=en&page=1';

  getMovie() {
    return fetch(this.URL_API, this.Settings)
      .then((res) => res.json())
      .then((res) => {
        return res.results;
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }
}
