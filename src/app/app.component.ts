import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { GameComponentComponent } from './game-component/game-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstAngularProject';
}
