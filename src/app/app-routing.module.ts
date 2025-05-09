import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "tabela", component: TabelaProdutosComponent },
  { path: "novo", component: FormProdutosComponent },
  { path: "lista", component: ListCardProdutosComponent },
  { path: "edit/:id", component: FormProdutosComponent },
  { path: "", redirectTo: "/tabela", pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
