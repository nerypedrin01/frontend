import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  
  product :Product = {
    nome: "",
    price: 0

  }
  http: any;

  constructor(private productSrvice :ProductService , private router: Router) { }

  ngOnInit(): void {
    
   
  }
  navigteToProductCancelar(): void{
    this.router.navigateByUrl("products");
  }
  
  navigteToProductSalvar(): void {
    
      this.productSrvice.create(this.product).subscribe(() =>{
        this.productSrvice.showMessage("Produto Criado com Sucesso!")
        this.router.navigateByUrl("products")
        console.log("Contato Salvo")
      })
    
   
}


}
