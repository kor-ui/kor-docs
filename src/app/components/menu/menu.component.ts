import { Component, OnInit } from '@angular/core';
import * as t from "src/assets/tree.json";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public tree = (<any>t).default;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    console.log(this.tree);
  }

}
