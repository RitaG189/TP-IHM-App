import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.page.html',
  styleUrls: ['./bebe.page.scss'],
})
export class BebePage implements OnInit {

  public dataProducts: any;

  constructor() {}

  ngOnInit(): void {
    fetch('./assets/data/bebe.json')
      .then(res => res.json())
      .then(json => {
        this.dataProducts = json;
      })
  }

}
