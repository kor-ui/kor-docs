import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public appTheme: string = "dark";

  constructor() { }
}
