import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Output() public playerName = new EventEmitter<string>()
  @Output() public switchPage = new EventEmitter<boolean>()  

  public player: string = ''


  public verify(form: FormGroup) {
    const player = form.value.player;
    const email = form.value.email;
    }

  buttonTitle:string = "Start game";

 
  constructor(private _router: Router, private _storage: StorageService) { }

  openGame() {
	
    this._router.navigate(['/game']);

}

  ngOnInit(): void {
  }
}
