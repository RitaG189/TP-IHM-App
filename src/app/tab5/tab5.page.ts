import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public dataProducts: any;
  public accountLogin: boolean = false;

  constructor() { }

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
    }
  }

  logout() {
    document.getElementById("profile").style.display = "none";
    document.getElementById("login").style.display = "";

  }

}
