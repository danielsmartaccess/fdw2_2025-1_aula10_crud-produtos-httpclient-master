import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class FormProdutosComponent implements OnInit {
  produto: Produto = new Produto();
  titulo: string = 'Cadastrar Produto';
  botaoAcao: string = 'Cadastrar';

  constructor(
    private produtoService: ProdutoApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.titulo = 'Editar Produto';
      this.botaoAcao = 'Salvar';
      this.produtoService.getProduto(parseInt(id)).subscribe(
        produto => this.produto = produto
      );
    }
  }

  salvar(): void {
    if (this.produto.id) {
      this.produtoService.updateProduto(this.produto).subscribe(
        () => this.router.navigate(['/produtos'])
      );
    } else {
      this.produtoService.addProduto(this.produto).subscribe(
        () => this.router.navigate(['/produtos'])
      );
    }
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }
}
