import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit  {

  public constructor(
    private _router: Router,
    private _storage: StorageService,
    private fb: FormBuilder) { }

  public introForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      code: ['', [Validators.required, Validators.minLength(5)]],
      color:['Normal', [Validators.required]]
      
    });

  public get nameGetter() { return this.introForm.get('age') as FormControl };
  public get codeGetter() { return this.introForm.get('year') as FormControl };
  public colors$ = ['Normal', 'High contrast']

  public submit(form: FormGroup) {
    
    const name = form.value.name

    if(form.valid)
      this._storage.storeName(name);
      this._router.navigate(['/game']);
      }

  ngOnInit(): void {

  }
  selectColor(color: string): void {
    this._router.navigate(['/game', color]);
}
}
