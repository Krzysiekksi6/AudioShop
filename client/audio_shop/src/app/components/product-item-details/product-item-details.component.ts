import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.scss'],
})
export class ProductItemDetailsComponent implements OnInit {
  @Input() id: string = '';
  public productDetails: Product = {
    slug: '',
    name: '',
    image: '',
    category: '',
    new: false,
    price: 0,
    description: '',
    features: '',
  };

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });

    this.service.getById(this.id).subscribe((res: any) => {
      this.productDetails.slug = res['slug'];
      this.productDetails.name = res['name'];
      this.productDetails.image = res['image'];
      this.productDetails.category = res['category'];
      this.productDetails.new = res['new'];
      this.productDetails.price = res['price'];
      this.productDetails.description = res['description'];
      this.productDetails.features = res['features'];
    });
  }

  onClearProducts() {
    // this.service.delete(this.id).subscribe(() => {
    //   this.router.navigate(['/']);
    // });
    this.router.navigate(['/shop']);
  }
}
