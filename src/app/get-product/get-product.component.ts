import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent {
  constructor(private ProductService:ProductService,private active:ActivatedRoute,private route:Router){}
  
  product:Product=new Product();
  id:number;

  ngOnInit(): void {
    this.id=this.active.snapshot.params['id'];
    this.getById(this.id);

  }
  getById(id:number):void{
    this.ProductService.getById(this.id).subscribe((response)=>{
      console.log(response);
      this.product=response;
    })
  } 
goToGetAllDetails():void{
  this.route.navigate(['viewList']);
}
}
