import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  email: string = "aluno@ipvc.pt";
  password: string = "123";

  constructor(public navCtrl: NavController) { 
    

    
  }

  ngOnInit() {
  }

  verifyAccount() {

  var inputEmail = document.getElementById('email').nodeValue;
    
  //window.alert(inputEmail)

    // if(this.email === email2 && this.password === password) {
      // window.alert("login" + email2 + this.email)
    // }
  }

}
