import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.page.html',
  styleUrls: ['./novidades.page.scss'],
})
export class NovidadesPage implements OnInit {

  public dataProducts: any;

  constructor() {}

  ngOnInit(): void {
    fetch('./assets/data/recem-nascido.json')
      .then(res => res.json())
      .then(json => {
        this.dataProducts = json;
        console.log(this.dataProducts)
      })
      
    
  }

}
