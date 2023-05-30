import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product-item',
  templateUrl: './add-product-item.component.html',
  styleUrls: ['./add-product-item.component.scss'],
})
export class AddProductItemComponent implements OnInit{
  public newProduct:Product = {
    slug: '',
    name: '',
    image: '',
    category: '',
    new: false,
    price: 0,
    description: '',
    features: '',
  }

  constructor(private dataService: DataService, public router: Router) {}

  ngOnInit(): void {
    
  }
  handleNewProductChange(value: boolean) {
    this.newProduct.new = value;
  }

  create() {
    this.dataService.add(this.newProduct).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/shop']);
  }

}
