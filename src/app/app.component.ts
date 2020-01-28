import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'waDocs';

  constructor(
    public data: DataService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      // wait for iframes to load and call set theme
      document.querySelectorAll('iframe').forEach(el => {
        el.onload = () => { this.setDemoTheme();}
      })
    }, 0);
  }

  // switch app theme
  public switchTheme(): void {
    this.data.appTheme = this.data.appTheme == "dark" ? "light" : "dark";
    this.setDemoTheme();
  }

  // set all demos theme to match app theme
  private setDemoTheme() {
    document.querySelectorAll('iframe').forEach(el => {
      el.contentWindow.document.body.setAttribute("theme", this.data.appTheme);
    })
  }
}
