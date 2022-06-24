import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Scores } from '../interface/scores';
import { Location } from '@angular/common';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  scoreList : Array<Scores> = [];

  constructor(
    private _scores: ScoresService,
    private _location: Location,) {

    this._scores.readScores().subscribe(result => {
      this.scores = result;

   })
  }

  goBack() {
    this._location.back();
  }

  public scores: Array<Scores> = [];

  ngOnInit(): void {
    
  }

}
