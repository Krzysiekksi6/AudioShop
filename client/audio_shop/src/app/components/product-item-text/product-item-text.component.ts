import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-text',
  templateUrl: './product-item-text.component.html',
  styleUrls: ['./product-item-text.component.scss'],
})
export class ProductItemTextComponent implements OnInit {
  @Input() name?: string;
  @Input() id?: number;

  constructor() {}

  ngOnInit(): void {
  }

}
