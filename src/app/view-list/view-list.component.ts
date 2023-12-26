import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent {
  constructor(private ProductService:ProductService,private route:Router){}
products:Product[];
getAllProducts():Observable<Product[]>{
  return this.ProductService.getAllProducts();
}

  ngOnInit(): void {
    this.getAllProducts().subscribe((response)=>{this.products=response;
      console.log(response);
    },
   error=>console.log(error)
    )
  } 
  goToPostProduct():void{
    this.route.navigate(["postProduct"]);
  }


  goToGetProduct(id:number):void{
    this.route.navigate(['getproduct',id]);
  }
  goToupdateProduct(id:number):void{
    this.route.navigate(['updateproduct',id]);
  }

  goToDelete(Id:number) {
     
    this.ProductService.deleteById(Id).subscribe(
      (response) => {
        console.log('Product deleted successfully:', response);
        this.getAllProducts().subscribe((product) => {
          this.products = product;
        });
      },
      (error:any) => {
        console.error('Error deleting product:', error);
      }
    );
  }


  
}
