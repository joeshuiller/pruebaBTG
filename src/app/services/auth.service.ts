import { Injectable } from '@angular/core';
import { HttpsService } from './https.service';
import { RoutersLink } from '../store/interface/link';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private registeResquest: HttpsService,
  ) { }

  login(item:any){
    return  this.registeResquest.POST("", item)
  }
  getData(item:string){
    return  this.registeResquest.GET(item)
  }
  getProducts(){
    return  this.registeResquest.GET(RoutersLink.productsDetails)
  }
}
