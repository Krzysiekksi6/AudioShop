import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductItemComponent } from './components/add-product-item/add-product-item.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'shop',
    component: ShopHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/detail/:id',
    component: ProductItemDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/edit/:id',
    component: EditProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addProduct',
    component: AddProductItemComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
