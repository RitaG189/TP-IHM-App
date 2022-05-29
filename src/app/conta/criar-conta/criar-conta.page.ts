import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit{

  contaForm: FormGroup;
  isSubmited: boolean = false;

  constructor(private toastController: ToastController, private router: Router, private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.contaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      apelido: ['', [Validators.required, Validators.minLength(2)]],
      username: ['',[Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contacto: ['', [Validators.required]]
    });

    this.contaForm.valueChanges.subscribe(data => console.log(data))
  }


  submitForm() {
    this.isSubmited = true;
    if (!this.contaForm.valid) {
      return false;
    } else {
      console.log(this.contaForm.value);
    }
  }



  criarConta() {

    this.router.navigate(['/tabs/tab5'])

    this.toastController.create({
      message: 'Conta criada com sucesso.',
      duration: 2000,
      position: 'top',
      animated: true,
      cssClass: 'toast'

    }).then(res => {

      res.present();

    });
  }


}
