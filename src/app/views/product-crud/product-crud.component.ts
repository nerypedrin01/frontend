import { Product } from './../../components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  products: Product[] = []
  displayedColumns: string[] = ['id', 'name', 'preco', 'action'];


  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)

    })
      
  }


  navigteToProductCreate(): void {
    this.router.navigateByUrl("products/create");
    console.log("Criei um novo");
  }
  
  delete(prod :Product): void{
    this.productService.delete(prod);
  }
}
