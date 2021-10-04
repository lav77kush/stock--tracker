import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';
@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  stock: string=''; 
  symbols:any;
  constructor(private service: StocksService) { 
  this.symbols = service.get(); 
  } 
  add() { 
  this.symbols = this.service.add(this.stock.toUpperCase()); 
  this.stock = ''; 
  } 
  remove(symbol:any) { 
  this.symbols = this.service.remove(symbol); 
  } 
 }


