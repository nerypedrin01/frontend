import { Product } from './../product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  product: Product = {
    nome: "",
    price: 0
  }

  constructor(private productSrvice: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productSrvice.readById(id).subscribe(productk => {
      this.product = productk
    });
  }

  delete(): void {
    this.productSrvice.delete(this.product.id).subscribe(() =>{
      this.productSrvice.showMessage("Produto deletado com Sucesso!")
      this.router.navigateByUrl("products")
      console.log("Produto Deletado")
    })
  }
  cancel(): void {
    this.router.navigateByUrl("/products");
  }
}
