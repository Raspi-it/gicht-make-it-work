import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardTemp } from "./components/card/card.temp";
import { NavigationHeaderTemp } from './components/navigation-header/navigation-header.temp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardTemp, NavigationHeaderTemp],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gicht-make-it-work';
  bool = true;
}
