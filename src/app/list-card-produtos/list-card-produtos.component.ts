import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { FiltroPesquisaPipe } from '../filtro-pesquisa.pipe';

@Component({
  selector: 'app-list-card-produtos',
  templateUrl: './list-card-produtos.component.html',
  styleUrls: ['./list-card-produtos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, CardProdutoComponent, FiltroPesquisaPipe]
})
export class ListCardProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  termoBusca: string = '';

  constructor(private produtoService: ProdutoApiService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      produtos => this.produtos = produtos,
      error => console.error('Erro ao carregar produtos:', error)
    );
  }

  excluirProduto(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.deleteProduto(id).subscribe(
        () => {
          this.carregarProdutos();
        },
        error => console.error('Erro ao excluir produto:', error)
      );
    }
  }
}
