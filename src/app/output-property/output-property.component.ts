import { Component, Input, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  
})
export class OutputPropertyComponent {

  @Input('value') valor: number =0;

  @Output() mudouValor = new EventEmitter() ;

  cursos: string[]=['Java','Angular', 'Python'];
  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }
  onMudouValor(evento:any){
    console.log(evento.novoValor);
  }
}
