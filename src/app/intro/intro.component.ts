import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  public constructor(private _router: Router,
     private _storage: StorageService) { }


  public verify(form: FormGroup, playerModel: NgModel) : void {
    
    const name = form.value.player
    console.log(playerModel)

    this._storage.storeName(name);
    }

  buttonTitle:string = "Start game";

 
  
  openGame() {
	
    this._router.navigate(['/game']);

  } 

}
