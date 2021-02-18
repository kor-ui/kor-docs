import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(public data: DataService, public router: Router) {}

  ngOnInit(): void {}

  findComponent(): boolean {
    return this.data.sandbox.find(
      ({ name }) => name === this.data.getNameFromUrl()
    );
  }

  handleLoad(): void {
    // wait for iframes to load and call set theme
    document.querySelectorAll('iframe').forEach((el) => {
      el.onload = () => this.data.setDemoTheme(el);
    });
    // scroll content to top
    document.querySelector('app-content').scrollTo(0, 0);
  }
}
