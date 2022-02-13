import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Output() public playerName = new EventEmitter<string>()
  public player: string = ''
  passPlayerName (){
    this.playerName.emit(this.player)
  }

  buttonTitle:string = "Start game";

  visible:boolean = true;
 
  constructor() { }

  ngOnInit(): void {
  }

  
}
