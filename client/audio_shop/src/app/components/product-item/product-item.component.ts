import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{

  @Input() name?: string;
  @Input() image?: string;
  @Input() id?: number;

  ngOnInit(): void {
    
  }
}
