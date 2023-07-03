import { Component, DoCheck, OnInit } from '@angular/core';

import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(
    private listaService: ListaDeCompraService
  ) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  editarItem(itemSelecionado: Item): void {
    this.itemParaSerEditado = itemSelecionado;
  }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }
}
