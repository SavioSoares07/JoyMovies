import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private Settings = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer <seu-token-aqui>',
    },
  };

  private PageCurrent = 1;
  private moviesSubject = new BehaviorSubject<any[]>([]);
  public movies$ = this.moviesSubject.asObservable();

  private getURL() {
    return `https://api.themoviedb.org/3/movie/now_playing?language=en&page=${this.PageCurrent}`;
  }

  getMovie() {
    return fetch(this.getURL(), this.Settings)
      .then((res) => res.json())
      .then((res) => {
        this.moviesSubject.next(res.results); // Atualiza o BehaviorSubject com os filmes
        return res.results;
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
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
