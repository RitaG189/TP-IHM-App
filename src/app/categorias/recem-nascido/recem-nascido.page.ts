import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recem-nascido',
  templateUrl: './recem-nascido.page.html',
  styleUrls: ['./recem-nascido.page.scss'],
})
export class RecemNascidoPage implements OnInit {

  public dataProducts: any;

  constructor() { }

  ngOnInit(): void {
    fetch('./assets/data/recem-nascido.json')
      .then(res => res.json())
      .then(json => {
        this.dataProducts = json;
      })
      
  }

}
