import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemTextComponent } from './components/product-item-text/product-item-text.component';
import { ProductItemImageComponent } from './components/product-item-image/product-item-image.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { DataService } from './services/data.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductItemComponent } from './components/add-product-item/add-product-item.component';
import { HeaderComponent } from './components/header/header.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDeleteDialogComponent } from './components/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductItemComponent,
    ProductItemTextComponent,
    ProductItemImageComponent,
    ProductItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    ShopHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddProductItemComponent,
    HeaderComponent,
    EditProductComponent,
    DropdownDirective,
    ConfirmDeleteDialogComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatDialogModule],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
