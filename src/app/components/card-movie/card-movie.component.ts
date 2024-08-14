import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'], // Corrigido styleUrl para styleUrls
})
export class CardMovieComponent {
  @Input() movie: any;
}
