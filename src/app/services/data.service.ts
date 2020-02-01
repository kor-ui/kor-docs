import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public appTheme: string = "light";

  constructor() { }

  // switch app theme
  public switchTheme(): void {
    this.appTheme = this.appTheme == "dark" ? "light" : "dark";
    this.setDemoTheme();
  }

  // set all demos themes to match app theme
  public setDemoTheme(el?: any): void {
    if (el) {
      let body = el.contentWindow.document.body;
      body.setAttribute("theme", this.appTheme);
      body.querySelector('.demo').style.opacity = "1";
    } else {
      document.querySelectorAll('iframe').forEach(el => {
        el.contentWindow.document.body.setAttribute("theme", this.appTheme);
      })
    }
  }
}
