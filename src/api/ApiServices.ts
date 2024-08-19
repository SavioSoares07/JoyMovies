import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private PageCurrent = 1;
  private moviesSubject = new BehaviorSubject<any[]>([]);
  public movies$ = this.moviesSubject.asObservable();

  constructor(private http: HttpClient) {}

  private getURL(): string {
    return `https://api.themoviedb.org/3/movie/now_playing?language=en&page=${this.PageCurrent}`;
  }

  private getHttpOptions() {
    return {
      method: 'GET',
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGVlMjMwNGY3NDkyMjZkODdkYjZkYzE0OGM3MTI2ZCIsIm5iZiI6MTcyMzY0NjY3OC42MDMwMDEsInN1YiI6IjYyNGQ5MTNjMGQxZTdmMDA2NmY1NzlhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3_9Pf7-yeWh9avGF9pThoWUBA_hNkHlRfDFAsKLYhT0',
      }),
    };
  }

  getMovie() {
    this.http.get<any>(this.getURL(), this.getHttpOptions()).subscribe(
      (response) => {
        this.moviesSubject.next(response.results); // Atualiza o BehaviorSubject com os filmes
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
        this.moviesSubject.next([]); // Emite um array vazio em caso de erro
      }
    );
  }

  nextPage() {
    this.PageCurrent += 1;
    this.getMovie(); // Carrega os filmes da próxima página
  }

  prevPage() {
    if (this.PageCurrent > 1) {
      this.PageCurrent -= 1;
      this.getMovie(); // Carrega os filmes da página anterior
    }
  }
}
