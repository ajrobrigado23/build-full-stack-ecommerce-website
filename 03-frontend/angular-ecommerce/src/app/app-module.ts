import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './components/product-list/product-list';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './services/product.service';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    App,
    ProductList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Module that contains HttpClient
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ProductService
  ],
  bootstrap: [App]
})
export class AppModule { }
