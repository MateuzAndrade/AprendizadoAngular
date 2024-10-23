import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 4, color: 'lightblue', image:'/images/delicia.png' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen', image: '/images/hotdog.png' },
    { text: 'Three', cols: 1, rows: 2, color: 'red', image: '/images/pizza.png' },
    { text: 'Four', cols: 4, rows: 1, color: 'lightpink', image: '/images/todoslanches.png' },
  ];
}
