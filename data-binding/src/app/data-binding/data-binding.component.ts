import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  imgSize: number = 42;
  valorCampo: any;
  valorSalvo: any;
  mouseEmCima: boolean = false;
  nome: string;

  constructor() { }

  ngOnInit() {
  }

  clicou() {
    alert('Botão clicado!');
  }

  onChangeValue(event) {
    console.log(event.novoValor);
  }

  checarDigitacao(valor) {
    this.valorCampo = valor;
  }

  salvarCampo(valor) {
    this.valorSalvo = valor;
  }

  passouMouse() {
    this.mouseEmCima = true;
  }

  tirouMouse() {
    this.mouseEmCima = false;
  }

  getValor(): number {
    return 1;
  }

  getImg(): string {
    return 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg';
  }

}
