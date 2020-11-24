import { Router } from "@angular/router";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto.model";

@Component({
  selector: "app-produto-criar",
  templateUrl: "./produto-criar.component.html",
  styleUrls: ["./produto-criar.component.css"],
})
export class ProdutoCriarComponent implements OnInit {
  constructor(private produtoServico: ProdutoService, private router: Router) {}

  produto: Produto = {
    nome: '',
    preco: null,
  };

  ngOnInit(): void {}

  criar(): void {
    this.produtoServico.criar(this.produto).subscribe(() => {
      this.produtoServico.exibirMensagem("Cadastro efetuado com sucesso!");
      this.router.navigate(["produtos"]);
    });
  }

  cancelar(): void {
    this.router.navigate(["produtos"]);
  }
}
