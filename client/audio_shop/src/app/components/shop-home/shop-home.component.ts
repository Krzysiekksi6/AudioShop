import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss'],
})
export class ShopHomeComponent implements OnInit {
  @ViewChild(ShopComponent) shopComponent!: ShopComponent;
  public filterText: string = '';

  constructor() {}

  ngOnInit(): void {}

  getName($event: string): void {
    this.filterText = $event;
  }

  onSeeProductsClicked() {
    if (this.shopComponent) {
      this.shopComponent.scrollToSection();
    }
  }
}
