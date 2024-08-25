import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  mensagem: string;
  constructor() {
    this.mensagem = '';
  }
  ngOnInit() {}
  alterarMensagem(n: string) {
    this.mensagem = `Seja bem-vindo, ${n}!`;
  }
}
