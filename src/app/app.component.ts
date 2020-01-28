import { Component, AfterViewInit } from '@angular/core';
import { wa } from 'wa-baukasten/wa.js' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'waDocs';
  ngAfterViewInit() {
    console.log(wa)
  }
}
