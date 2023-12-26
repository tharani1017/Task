import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { PostProductComponent } from './post-product/post-product.component';

const routes: Routes = [  {path:"viewList",component:ViewListComponent},
{path:"",redirectTo:"viewList",pathMatch:"full"},
{path:"postProduct",component:PostProductComponent},
{path:"getproduct/:id",component:GetProductComponent},
{path:"updateproduct/:id",component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
