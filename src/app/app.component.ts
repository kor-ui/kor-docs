import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waDocs';

  constructor(
    public data: DataService
  ) {}

  public switchTheme(): void {
    this.data.appTheme = this.data.appTheme == "dark" ? "light" : "dark";
  }
}
