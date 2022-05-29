import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.page.html',
  styleUrls: ['./pagina-produto.page.scss'],
})
export class PaginaProdutoPage implements OnInit {

  public infoProduto: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute, private toastController: ToastController) { 
   
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.infoProduto = this.router.getCurrentNavigation().extras.state.dadosProduto;
      }
    })


  }

  ngOnInit() {
  }

  favorite() {

    document.getElementById('heart-button').style.color = "red";


    this.toastController.create({
      message: 'Produto adicionado à lista de desejos',
      duration: 2000,
      position: 'bottom',
      animated: true,
      cssClass: 'toast',      

    }).then(res => {

      res.present();

    });
  }

  adicionarProduto() {
    this.toastController.create({
      message: 'Produto adicionado ao cesto',
      duration: 2000,
      position: 'bottom',
      animated: true,
      cssClass: 'toast',      

    }).then(res => {

      res.present();

    });
  }



}
