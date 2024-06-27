import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  getProduct() {
    return this.http.get<any>("http://localhost:3000/products").pipe(map((res:any) => {
      return res 
    }))
  }
  getFashion() {
    return this.http.get<any>("http://localhost:3000/fashions").pipe(map((res:any) => {
      return res 
    }))
  }
  getMensWear() {
    return this.http.get<any>("http://localhost:3000/means_wear").pipe(map((res:any) => {
      return res 
    }))
  }
  getWomensWear() {
    return this.http.get<any>("  http://localhost:3000/womens_wear").pipe(map((res:any) => {
      return res 
    }))
  }
  getKidsWear() {
    return this.http.get<any>(" http://localhost:3000/kids_wear").pipe(map((res:any) => {
      return res 
    }))
  }
  getWinterWear() {
    return this.http.get<any>("http://localhost:3000/winter_wear").pipe(map((res:any) => {
      return res 
    }))
  }
  getLadiesWear() {
    return this.http.get<any>("http://localhost:3000/ladies_wear").pipe(map((res:any) => {
      return res 
    }))
  }
}
