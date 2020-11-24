import { Produto } from "./../produto.model";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-lista",
  templateUrl: "./produto-lista.component.html",
  styleUrls: ["./produto-lista.component.css"],
})
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[];
  colunas = ['id', 'nome', 'preco', 'acoes'];

  constructor(private produtoServico: ProdutoService) {}

  ngOnInit(): void {
    this.produtoServico
      .carregarTodos()
      .subscribe((produtos) => (this.produtos = produtos));
  }
}
