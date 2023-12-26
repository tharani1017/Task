import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewListComponent } from './view-list/view-list.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import { GetProductComponent } from './get-product/get-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { PostProductComponent } from './post-product/post-product.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent,
    GetProductComponent,
    UpdateProductComponent,
    PostProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
