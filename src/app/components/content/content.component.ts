import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  component: any;
  constructor(
    public data: DataService,
    public router: Router,
    public elRef: ElementRef
  ) {}

  ngOnInit(): void {}

  getMarkdownPath(): string {
    return this.router.url !== '/'
      ? `./assets/docs${this.router.url.split('#')[0]}/index.md`
      : '';
  }

  handleLoad(): void {
    this.elRef.nativeElement.classList.remove('loaded');
    setTimeout(() => {
      this.elRef.nativeElement.classList.add('loaded');
    }, 0);
    // wait for iframes to load and call set theme
    document.querySelectorAll('iframe').forEach((el) => {
      el.onload = () => this.data.setDemoTheme(el);
    });
    // scroll content to top
    document.querySelector('app-content').scrollTo(0, 0);
    // fetch new component
    this.component = this.data.sandbox.find(
      ({ name }) => name === this.data.getNameFromUrl()
    );
  }
}
