import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    public data: DataService,
    public router: Router
  ) { }

  handleLoad() {
    // wait for iframes to load and call set theme
    document.querySelectorAll('iframe').forEach(el => {
      el.onload = () => { this.data.setDemoTheme();}
    })
  }

  ngOnInit() {
  }

}
