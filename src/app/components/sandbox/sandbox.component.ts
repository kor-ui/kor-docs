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

  constructor(
    public data: DataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.setDemo();
    this.router.events.subscribe(() => { this.setDemo(); }); 
  }

  setDemo(): void {
    let wrapper = document.querySelector('.demo-wrapper');
    let el = document.createElement(`kor-${this.component.name}`);
    this.component.properties.forEach(prop => {
      if (!prop.value) {
        el.removeAttribute(prop.name);
      } else {
        el.setAttribute(prop.name, prop.value);
      }
    });
    wrapper.innerHTML = '';
    wrapper.appendChild(el);
  }

}
