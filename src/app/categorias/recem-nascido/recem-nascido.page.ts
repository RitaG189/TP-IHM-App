import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recem-nascido',
  templateUrl: './recem-nascido.page.html',
  styleUrls: ['./recem-nascido.page.scss'],
})
export class RecemNascidoPage implements OnInit {

  public dataProducts: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    fetch('./assets/data/clothes.json')
      .then(res => res.json())
      .then(json => {
        this.dataProducts = json;
      })
      
  }

  verProduto(produtoID: string) {
    
    let infoProduto: NavigationExtras;

    infoProduto = {
      state: {
        dadosProduto: this.dataProducts[produtoID]
      }
    }

    this.router.navigate(['/pagina-produto'], infoProduto)
    
  }

}
