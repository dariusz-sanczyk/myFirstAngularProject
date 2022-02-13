import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.scss']
})
export class GameComponentComponent implements OnInit {


@Input() nameInGame : string = ''

  counter:number = 0

  public onGrow() {
    this.counter = this.counter + 1 
    console.log('grow');
}

  public onGameOver() {
    alert('game over');
}
  public resetCounter() {
    this.counter = 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
