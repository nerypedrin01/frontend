import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product :Product = {
    nome: "",
    price: 0}
  constructor(private productSrvice :ProductService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productSrvice.readById(id).subscribe(product => {
      this.product = product
    });
  }

  salvar(): void {
    this.productSrvice.update(this.product).subscribe(() =>{
      this.productSrvice.showMessage('Produto Atualizado')
      this.router.navigateByUrl('/products')
    })
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
