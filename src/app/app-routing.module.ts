import { DeleteComponent } from './components/product/delete/delete.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { UpdateComponent } from './components/product/update/update.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductCrudComponent
  },
  {
    path:"products/create",
    component: ProductCreateComponent

  },
  {
    path:"products/update/:id",
    component: UpdateComponent
  },
  {
    path:"products/delete/:id",
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
