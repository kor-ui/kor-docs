import { Injectable } from '@angular/core';
import * as t from "src/assets/docs/tree.json";
import * as s from "src/assets/docs/sandbox.json";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public appTheme: string = "light";
  public tree = (<any>t).default;
  public sandbox = (<any>s).default;

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
