import { ActivatedRoute, Router } from "@angular/router";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto.model";

@Component({
  selector: "app-produto-excluir",
  templateUrl: "./produto-excluir.component.html",
  styleUrls: ["./produto-excluir.component.css"],
})
export class ProdutoExcluirComponent implements OnInit {
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

  remover(): void {
    this.produtoServico.remover(this.produto.id).subscribe(() => {
      this.produtoServico.exibirMensagem("Registro excluído com sucesso!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancelar(): void {
    this.router.navigate(["/produtos"]);
  }
}
