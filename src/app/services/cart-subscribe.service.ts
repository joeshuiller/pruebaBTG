import { Injectable } from '@angular/core';
import { HttpsService } from './https.service';
import { RoutersLink } from '../store/interface/link';

@Injectable({
  providedIn: 'root'
})
export class CartSubscribeService {

    constructor(
      private registeResquest: HttpsService,
    ) { }

    create(item:any){
      return  this.registeResquest.POST(RoutersLink.buyDetails, item)
    }
    getProducts(){
      return  this.registeResquest.GET(RoutersLink.buyDetails)
    }
    deleteProducts(id:number){
      return  this.registeResquest.DELETE(RoutersLink.buyDetails+'/'+id)
    }
}
