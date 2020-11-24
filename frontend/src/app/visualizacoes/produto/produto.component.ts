import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CabecalhoService } from "src/app/componentes/modelos/cabecalho/cabecalho.service";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"],
})
export class ProdutoComponent implements OnInit {
  constructor(
    private router: Router,
    private cabecalhoServico: CabecalhoService
  ) {
    cabecalhoServico.cabecalhoData = {
      titulo: "Cadastro de Produtos",
      icone: "storefront",
      rotaUrl: "/produtos",
    };
  }

  ngOnInit(): void {}

  navegarParaCriarProduto(): void {
    this.router.navigate(["/produtos/criar"]);
  }
}
