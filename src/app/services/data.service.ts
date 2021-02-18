import { Injectable } from '@angular/core';
import * as t from 'src/assets/docs/tree.json';
import * as s from 'src/assets/docs/sandbox.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public appTheme = 'light';
  public showMenu = false;
  public mobile = false;
  tree = (t as any).default;
  sandbox = (s as any).default;

  constructor(public router: Router) {}

  // switch app theme
  switchTheme(): void {
    this.appTheme = this.appTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('appTheme', this.appTheme);
    this.setDemoTheme();
  }

  // set all demos themes to match app theme
  setDemoTheme(el?: any): void {
    if (el) {
      const body = el.contentWindow.document.body;
      body.setAttribute('theme', this.appTheme);
      body.querySelector('.demo').style.opacity = '1';
    } else {
      document.querySelectorAll('iframe').forEach((frame) => {
        frame.contentWindow.document.body.setAttribute('theme', this.appTheme);
      });
    }
  }

  formatUrl(str: string): string {
    return str.replace(/\s+/g, '-').toLowerCase();
  }

  getNameFromUrl(): string {
    const params = this.router.url.split('/');
    return params[params.length - 1].split('#')[0];
  }
}
