import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Output() public playerName = new EventEmitter<string>()
  @Output() public switchPage = new EventEmitter<boolean>()  

  public player: string = ''
  public visibility: boolean = false

  switchVisibility () {
    this.switchPage.emit(this.visibility)
  }

  passPlayerName (){
    this.playerName.emit(this.player)
  }

  public verify(form: FormGroup) {
    const player = form.value.player;
    const email = form.value.email;
    }

  buttonTitle:string = "Start game";

  visible:boolean = true;
 
  constructor() { }

  ngOnInit(): void {
  }
}
