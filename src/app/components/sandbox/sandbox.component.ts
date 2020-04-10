import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  @Input() component: any;

  public codeSnippet: string;

  constructor(
    public data: DataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.setDemo();
    this.router.events.subscribe(() => { this.setDemo(); });
  }

  public setDemo(): void {
    const wrapper = document.querySelector('.demo-wrapper');
    const el = document.createElement(`kor-${this.component.tag ? this.component.tag : this.component.name}`);
    this.component.properties.forEach(prop => {
      if (!prop.value) {
        el.removeAttribute(prop.name);
      } else {
        el.setAttribute(prop.name, prop.value);
      }
    });
    wrapper.innerHTML = '';
    wrapper.appendChild(el);
    this.codeSnippet = wrapper.innerHTML;
  }

  public copyCode(): void {
    const input = document.createElement('input');
    input.value = this.codeSnippet;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

}
