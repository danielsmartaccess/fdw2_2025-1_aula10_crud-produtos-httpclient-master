import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: false,
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  habilitado = false;
  name = "Fulano";
  produtos: any[] = [
    { id: 1, nome:"Produto 1", preco: 10},
    { id: 2, nome:"Produto 2", preco: 20},
    { id: 3, nome:"Produto 3", preco: 30}
  ]

  dispararAlerta() {
    alert("Disparando o alerta");
    this.habilitado = true;
  }

}
