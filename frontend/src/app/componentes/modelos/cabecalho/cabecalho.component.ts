import { CabecalhoService } from "./cabecalho.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cabecalho",
  templateUrl: "./cabecalho.component.html",
  styleUrls: ["./cabecalho.component.css"],
})
export class CabecalhoComponent implements OnInit {
  constructor(private cabecalhoServico: CabecalhoService) {}

  ngOnInit(): void {}

  get titulo(): string {
    return this.cabecalhoServico.cabecalhoData.titulo;
  }
  
  get icone(): string {
    return this.cabecalhoServico.cabecalhoData.icone;
  }
  
  get rotaUrl(): string {
    return this.cabecalhoServico.cabecalhoData.rotaUrl;
  }
}
