import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) {}

  baseUrl="http://localhost:8080"

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/findAll`);
  }
  postDetails(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/add`,product);
  }
  getById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/find/${id}`);
  }
  updateById(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/update/${id}`,product);
  }
  deleteById(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/delete/${id}`);
  }

}
