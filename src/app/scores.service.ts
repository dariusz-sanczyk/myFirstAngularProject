import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Scores } from './interface/scores';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {


  public readScores () {
    const head = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    const requiredOption = {
      headers: new HttpHeaders(head)
    }

    const url = "http://scores.chrum.it/scores/snake";

    return this._http.get<Array<Scores>>(url, requiredOption)
    };

  constructor(private _http: HttpClient) { }

  
}
