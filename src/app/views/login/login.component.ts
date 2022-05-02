import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

let email = document.getElementById("campo-email")

let password = document.getElementById("campo-senha")

function enviarLogin() {
    let emailDigitado = email
    let senhaDigitada = password;
    console.log('emailDigitado' + 'senhaDigitada')
}