import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.scss']
})
export class GameComponentComponent implements OnInit {

@Output() public switchPage = new EventEmitter<boolean>()
@Input() nameInGame : string = ''
  
  counter:number = 0;
  time: number = 0;
  display: any;
  interval: any;
  status: string = 'ready';

  public visibility: boolean = true

  switchVisibility () {
    this.switchPage.emit(this.visibility)
  }

 startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform(this.time)
    }, 1000);
  }
  transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes + ':' + (value - minutes * 60);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

  public onGrow() {
    this.counter = this.counter + 1 
    console.log('grow');
}

  public onGameOver() {
    alert('game over');
    this.pauseTimer();
}
  public resetCounter() {
    this.counter = 0
  }
  
  public statusHandlerStart() {
    this.status = 'started' 
  }

  public statusHandlerStop() {
    this.status = 'stopped' 
  }
  
  public statusHandlerReady() {
    this.status = 'ready' 
  }


  constructor() { }

  ngOnInit(): void {
    
  }

}
