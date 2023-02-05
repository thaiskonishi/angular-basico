import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem='http://lorempixel.com.br/400/200/nature/';

  valorAtual:string ='';
  valorSalvo: string ='';
  isMouseOver: boolean = false;
  
  pessoa: any = {
    nome: 'def',
    idade: 20
  }
  getValor(){
    return 1;
  }
  getCurtirCurso() {
    return true
    }

  botaoClicado(){
    alert('o botão foi clicado')
  }

  onKeyUp(evento: KeyboardEvent){
    // console.log(evento);
    // console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual= (<HTMLInputElement>evento.target).value;
  }

  salvaValor(valor:any){
    this.valorSalvo =  (<HTMLInputElement>valor.target).value;
  }

  onMouseOverOut(){
  this.isMouseOver= !this.isMouseOver;
  }

  // getNome(evento:any){
  //   return this.nome = (<HTMLInputElement>evento.target).value;
  // }
  constructor(){}
  ngOnInit(): void {
      
  }

}
