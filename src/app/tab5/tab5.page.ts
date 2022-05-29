import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public dataProducts: any;
  public accountLogin: boolean = false;
  

  constructor(public alertController: AlertController, private toastController: ToastController) { 
  }

  ngOnInit(): void {
    fetch('./assets/data/clothes.json')
      .then(res => res.json())
      .then(json => {
        this.dataProducts = json;
      })
      
  }

  validateAccount(email: string, password: string) {
    
    if(email === "aluno" && password === "123") {
      this.accountLogin = true;   
    }

    if(this.accountLogin) {
      document.getElementById("profile").style.display = "";
      document.getElementById("login").style.display = "none";
      
    } else {
      document.getElementById("profile").style.display = "none";

      this.toastController.create({
        message: 'Nome de utilizador ou password incorretos',
        duration: 2000,
        position: 'top',
        animated: true,
        cssClass: 'toast',      
  
      }).then(res => {
  
        res.present();
  
      });
    }
  }

  logout() {
    this.alertController.create({
      header: 'Sair da Conta',
      message: 'Tens a certeza que queres sair da conta?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            
          }
        },
        {
          text: 'Sim',
          handler: () => {
            document.getElementById("profile").style.display = "none"
            document.getElementById("login").style.display = "" 
          }
        }
      ]
    }).then(res => {

      res.present();

    });

  }

}
