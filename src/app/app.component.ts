import { Component } from '@angular/core';
import { ApiService } from '../api/ApiServices';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies-project';

  constructor(private apiService: ApiService) {}

  passar(direction: string) {
    if (direction === 'next') {
      this.apiService.nextPage();
    } else if (direction === 'back') {
      this.apiService.prevPage();
    }
  }
}
