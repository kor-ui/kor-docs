import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import '@kor-ui/kor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kor-docs';

  constructor(
    public data: DataService
  ) {}

  ngOnInit() {
    this.handleMobile();
    window.addEventListener("resize", () => {
      this.handleMobile();
    });
  }

  private handleMobile(): void {
    this.data.mobile = document.documentElement.clientWidth < 767;
  }
}
