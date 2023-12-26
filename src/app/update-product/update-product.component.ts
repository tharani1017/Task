import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(
    private productService: ProductService,
    private active: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
        this.id = this.active.snapshot.params['id'];
        this.getid(this.id);
  }
  getid(id:number):void{
    console.log(id);
    this.productService.getById(id).subscribe((response)=>{
      this.product=response;
    });
    }
    goToUpdate():void{
      this.productService.updateById(this.id,this.product).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['viewList']);
      });
     }
    }