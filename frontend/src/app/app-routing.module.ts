import { ProdutoCriarComponent } from "./componentes/produto/produto-criar/produto-criar.component";
import { ProdutoComponent } from "./visualizacoes/produto/produto.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./visualizacoes/home/home.component";
import { ProdutoAlterarComponent } from "./componentes/produto/produto-alterar/produto-alterar.component";
import { ProdutoExcluirComponent } from "./componentes/produto/produto-excluir/produto-excluir.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "produtos",
    component: ProdutoComponent,
  },
  {
    path: "produtos/criar",
    component: ProdutoCriarComponent,
  },
  {
    path: "produtos/alterar/:id",
    component: ProdutoAlterarComponent,
  },
  {
    path: "produtos/excluir/:id",
    component: ProdutoExcluirComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
