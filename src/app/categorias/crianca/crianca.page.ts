import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crianca',
  templateUrl: './crianca.page.html',
  styleUrls: ['./crianca.page.scss'],
})
export class CriancaPage implements OnInit {

  public dataProducts: any;

  constructor() {}

  ngOnInit(): void {
    fetch('./assets/data/crianca.json')
      .then(res => res.json())
      .then(json => {
        this.dataProducts = json;
      })
  }

}
