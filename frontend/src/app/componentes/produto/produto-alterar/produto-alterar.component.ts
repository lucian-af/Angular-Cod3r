import { ActivatedRoute, Router } from "@angular/router";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto.model";

@Component({
  selector: "app-produto-alterar",
  templateUrl: "./produto-alterar.component.html",
  styleUrls: ["./produto-alterar.component.css"],
})
export class ProdutoAlterarComponent implements OnInit {
  produto: Produto;

  constructor(
    private produtoServico: ProdutoService,
    private router: Router,
    private rota: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.rota.snapshot.paramMap.get("id");
    this.produtoServico.carregarPorId(id).subscribe((prod) => {
      this.produto = prod;
    });
  }

  alterar(): void {
    this.produtoServico.alterar(this.produto).subscribe(() => {
      this.produtoServico.exibirMensagem("Alterado com sucesso!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancelar(): void {
    this.router.navigate(["/produtos"]);
  }
}
