import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
import { MoedaPipe } from './moeda.pipe';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    MoedaPipe,
    FiltroPesquisaPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TabelaProdutosComponent,
    FormProdutosComponent,
    CardProdutoComponent,
    ListCardProdutosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
