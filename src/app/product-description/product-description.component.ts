import { Component, NgModule, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})


export class ProductDescriptionComponent implements OnInit {
      albumInfo: Album;
      constructor(private _productService:ProductService) {};
     //injecting a private inst of ProductService

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe(response => {this.albumInfo = response})
  }

}
