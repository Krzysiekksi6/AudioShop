import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  public editedProduct: Product = {
    slug: '',
    name: '',
    image: '',
    category: '',
    new: false,
    price: 0,
    description: '',
    features: '',
  };
  private editedId: string = '';
  constructor(
    private dataService: DataService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  handleNewProductChange(value: boolean) {
    this.editedProduct.new = value;
  }

  update() {
    console.log(this.editedProduct, this.editedId);
    this.editedProduct.id = this.editedId
    this.dataService
      .update(this.editedProduct, this.editedId)
      .subscribe((result) => {
        console.log("ID: ", this.editedId);
        console.log("Obj: ", result);
        if (result) {
          // Pomyślnie zaktualizowano
          this.router.navigate(['/shop']);
        } else {
          // Obsługa błędu aktualizacji
          console.log(this.editedProduct);
          console.error("Błąd aktualizacji:", result);
        }
      });
    this.router.navigate(['/shop']);
  }

  getProduct() {
    this.route.paramMap.subscribe((params: any) => {
      this.editedId = params.get('id');
    });
    this.dataService.getById(this.editedId).subscribe((res: any) => {
      this.editedProduct.slug = res['slug'];
      this.editedProduct.name = res['name'];
      this.editedProduct.image = res['image'];
      this.editedProduct.category = res['category'];
      this.editedProduct.new = res['new'] === 'true';
      this.editedProduct.price = res['price'];
      this.editedProduct.description = res['description'];
      this.editedProduct.features = res['features'];
    });
  }
}
