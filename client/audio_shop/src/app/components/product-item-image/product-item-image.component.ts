import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item-image',
  templateUrl: './product-item-image.component.html',
  styleUrls: ['./product-item-image.component.scss']
})
export class ProductItemImageComponent {
  @Input() image?:string;
}
