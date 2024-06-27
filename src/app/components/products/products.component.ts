import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  public fashionList: any;
  public menssWear:any;
  public womensWear:any;
  public kidsWear:any;
  public wintersWear:any;
  public ladiesWear:any;
  public filterCategory: any;
  searchKey: string = '';
  public showsCartsJwellery:boolean | undefined;
  public showsCartsElectonics:boolean | undefined;
  public showsCartsProducts:boolean | undefined;
  public showsCartsFashion:boolean | undefined;
  public displayMensWear:boolean| undefined;
  public displayWomensWear:boolean| undefined;
  public displayKidsWear:boolean| undefined;
  public displayWintersWear:boolean| undefined;
  public displayLadiessWear:boolean| undefined;
  constructor(private api: ApiService, private cartService: CartService) {
    this.showsCartsProducts=false;
    this.showsCartsElectonics=false;
    this.showsCartsJwellery=false;
    this.showsCartsFashion=false;
    this.displayMensWear=false;
    this.displayWomensWear=false;
    this.displayKidsWear=false;
    this.displayWintersWear=false;
    this.displayLadiessWear=false;
  }

  ngOnInit(): void {

    this.api.getFashion().subscribe((res)=>{
      this.fashionList=res;
    })
    this.api.getMensWear().subscribe((res)=>{
      this.menssWear=res;
    })
    this.api.getWomensWear().subscribe((res)=>{
      this.womensWear=res;
    })
    this.api.getKidsWear().subscribe((res)=>{
      this.kidsWear=res;
    })
    this.api.getWinterWear().subscribe((res)=>{
      this.wintersWear=res;
    })
    this.api.getLadiesWear().subscribe((res)=>{
      this.ladiesWear=res;
    })
    
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (
          a.category === "men's clothing" ||
          a.category === "women's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  filter(category:string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
 
}

