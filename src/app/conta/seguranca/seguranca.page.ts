import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.page.html',
  styleUrls: ['./seguranca.page.scss'],
})
export class SegurancaPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  alterarPassword() {

    this.alertController.create({
      header: 'Alteração de Password',
      message: 'A password foi alterada com sucesso!',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

}
