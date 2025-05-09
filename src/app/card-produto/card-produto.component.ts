import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { MoedaPipe } from '../moeda.pipe';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, MoedaPipe]
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
  @Output() onDelete = new EventEmitter<number>();

  constructor(private produtoService: ProdutoApiService) { }

  excluir(): void {
    this.onDelete.emit(this.produto.id);
  }
}
