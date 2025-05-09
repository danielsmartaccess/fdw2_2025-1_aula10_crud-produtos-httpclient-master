import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { MoedaPipe } from '../moeda.pipe';
import { FiltroPesquisaPipe } from '../filtro-pesquisa.pipe';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MoedaPipe, FiltroPesquisaPipe]
})
export class TabelaProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  termoBusca: string = '';

  constructor(private produtoService: ProdutoApiService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  excluirProduto(id: number | undefined): void {
    if (id && confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.deleteProduto(id).subscribe(
        () => {
          this.carregarProdutos();
        },
        (error) => {
          console.error('Erro ao excluir produto:', error);
        }
      );
    }
  }
}
