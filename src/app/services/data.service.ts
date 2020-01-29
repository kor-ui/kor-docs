import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public appTheme: string = "dark";

  constructor() { }

  // set all demos themes to match app theme
  public setDemoTheme(el?: any): void {
    if (el) {
      el.contentWindow.document.body.setAttribute("theme", this.appTheme);
      el.style.opacity = "1";
    } else {
      document.querySelectorAll('iframe').forEach(el => {
        el.contentWindow.document.body.setAttribute("theme", this.appTheme);
      })
    }
  }
}