import { CabecalhoData } from "./cabecalho-data.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CabecalhoService {
  private _cabecalhoData = new BehaviorSubject<CabecalhoData>({
    titulo: "Início",
    icone: "home",
    rotaUrl: "",
  });
  constructor() {}

  get cabecalhoData(): CabecalhoData {
    return this._cabecalhoData.value;
  }

  set cabecalhoData(cabecalhoData: CabecalhoData) {
    this._cabecalhoData.next(cabecalhoData);
  }
}
