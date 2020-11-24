import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { Produto } from "./produto.model";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  baseUrl = "http://localhost:3001/produtos";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  exibirMensagem(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "[fechar]", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"],
    });
  }

  eventoErro(e: any): Observable<any> {
    this.exibirMensagem("Falha interna da aplicação", true);
    return EMPTY;
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.eventoErro(e))
    );
  }

  alterar(produto: Produto): Observable<Produto> {
    return this.http
      .put<Produto>(`${this.baseUrl}/${produto.id}`, produto)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.eventoErro(e))
      );
  }

  remover(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.eventoErro(e))
    );
  }

  carregarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  carregarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }
}
