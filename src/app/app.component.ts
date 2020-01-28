import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wa-docs';

  constructor(
    public data: DataService
  ) {}

  // switch app theme
  public switchTheme(): void {
    this.data.appTheme = this.data.appTheme == "dark" ? "light" : "dark";
    this.data.setDemoTheme();
  }
}
