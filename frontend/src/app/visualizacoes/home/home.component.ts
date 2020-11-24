import { Component, OnInit } from "@angular/core";
import { CabecalhoService } from "src/app/componentes/modelos/cabecalho/cabecalho.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private cabecalhoServico: CabecalhoService) {
    cabecalhoServico.cabecalhoData = {
      titulo: "Início",
      icone: "home",
      rotaUrl: "",
    };
  }

  ngOnInit(): void {}
}
