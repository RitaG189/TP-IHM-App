import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar-produto',
  templateUrl: './reservar-produto.page.html',
  styleUrls: ['./reservar-produto.page.scss'],
})
export class ReservarProdutoPage implements OnInit {

  public lojas: any;

  constructor() { }

  ngOnInit(): void {
    fetch('./assets/data/lojas.json')
      .then(res => res.json())
      .then(json => {
        this.lojas = json;
        console.log(this.lojas);
        
      })
  }

}
