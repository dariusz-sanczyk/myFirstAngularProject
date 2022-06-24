import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.scss']
})
export class GameComponentComponent implements OnInit {
  
  counter:number = 0;
  time: number = 0;
  display: any;
  interval: any;
  status: string = 'ready';
  name: string = ''

  

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

  constructor(
    private _router: Router,
    private _storage: StorageService,
    private _location: Location,
    ) { }

  goBack() {
      this._location.back();
    }
  
  goToScores(){
    this._router.navigate(['/scores'])
  }
  
  ngOnInit(): void {
    this.name = this._storage.readName();
  }

}
