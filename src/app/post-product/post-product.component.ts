import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {

  constructor(private ProductService:ProductService,private route:Router){}
  product:Product=new Product();
  
  onSubmit():void{
    this.ProductService.postDetails(this.product).subscribe((response)=>{this.product=response;
      console.log(response);
      this.goToGetAllDetailsPage();
    },
   error=>console.log(error)
    )
  }
  goToGetAllDetailsPage(){
    this.route.navigate(['viewList'])
  }
  }
