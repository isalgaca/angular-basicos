import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo</h1>
        
        <h2>{{ titulo }}</h2>
        
        <h3>La base es de {{ valorSumar }}</h3>
        
        <button (click)="acumular(valorSumar);">+ {{valorSumar}}</button>
        
        <span>{{ numero }}</span>
        
        <button (click)="acumular(-valorSumar);">- {{valorSumar}}</button>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 0;
    valorSumar: number = 5;
      
    acumular(valor: number){
        this.numero += valor;
    }
}