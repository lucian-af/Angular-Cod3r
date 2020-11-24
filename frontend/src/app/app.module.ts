import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

import { RedDirective } from "./diretivas/red.directive";

import { CabecalhoComponent } from "./componentes/modelos/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/modelos/rodape/rodape.component";
import { NavComponent } from "./componentes/modelos/nav/nav.component";
import { HomeComponent } from "./visualizacoes/home/home.component";
import { ProdutoComponent } from "./visualizacoes/produto/produto.component";
import { ForDirective } from "./diretivas/for.directive";
import { ProdutoCriarComponent } from "./componentes/produto/produto-criar/produto-criar.component";
import { ProdutoListaComponent } from "./componentes/produto/produto-lista/produto-lista.component";
import { ProdutoAlterarComponent } from './componentes/produto/produto-alterar/produto-alterar.component';
import { ProdutoExcluirComponent } from './componentes/produto/produto-excluir/produto-excluir.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    NavComponent,
    HomeComponent,
    ProdutoComponent,
    RedDirective,
    ForDirective,
    ProdutoCriarComponent,
    ProdutoListaComponent,
    ProdutoAlterarComponent,
    ProdutoExcluirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
