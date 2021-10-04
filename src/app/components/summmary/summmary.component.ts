import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summmary.component.html',
  styleUrls: ['./summmary.component.scss']
})
export class SummmaryComponent implements OnInit {
  @Input() stock: any;
  constructor() { }

  ngOnInit(): void {
    console.log('value>>>'+this.stock);
  }
  
  isNegative() { 
  return (this.stock && this.stock.change < 0); 
  } 
  isPositive() { 
  return (this.stock && this.stock.change > 0); 
  } 

  isActive(){
    return true;
  }
 
}
