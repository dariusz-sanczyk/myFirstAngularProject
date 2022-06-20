import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _playerName! :string;
	
  public storeName (name:string) : void {
    this._playerName = name
  };

  public readName () {
	
      return this._playerName;
	
  };
};
