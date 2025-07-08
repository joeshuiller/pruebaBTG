import { Component, OnDestroy } from '@angular/core';
import { CardsComponent } from '../../component/cards/cards.component';
import { PagesStates } from '../../store/interface/pagesInterface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as action from '../../store/actions';
import { LoadingComponent } from '../../component/loading/loading.component';
import { Users } from '../../store/models/userModels';
import { auth, carts, deleteCarts, product, RoutersLink, subscriptionProducts } from '../../store/interface/link';
import { authUsers } from '../../store/interface/authUsersInterface';
import { background } from '../../store/interface/backgruondInterface ';
import { Background } from '../../store/models/backgroundModels';
@Component({
  selector: 'app-home',
  imports: [CardsComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy{
  public listCards: Background[] = []
  public userSubscription!: Subscription
  public loading:boolean =false
  public eventsData!: Users;
  public shoppingValue:number=0
  public listProductsData: Background[] = []
  public shopping:any
  constructor(
    private store: Store<PagesStates>
  ){
    this.dataUsersSucess()
    this.dataProductsSucess()
    this.dataDeleteCartsSucess()
    this.dataListCartsSucess()
    if (!this.eventsData) {
       this.getUsers()
    }
    this.getProducts()
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  dataUsersSucess(){
    this.userSubscription = this.store.select(auth)
       .subscribe((data: authUsers) =>{
         switch (data.loading) {
           case true:
             this.loading = true;
             break;
           case false:
             this.loading = false;
             break;
           default:
             break;
         }
         if (data.error != null) {
           console.log(data.error)
         }
         if (data.auth != null) {
           this.eventsData = data.auth
         } else{
          //
         }
       })
  }
  dataProductsSucess(){
    this.userSubscription = this.store.select(product)
       .subscribe((data: background) =>{
         switch (data.loading) {
           case true:
             this.loading = true;
             break;
           case false:
             this.loading = false;
             break;
           default:
             break;
         }
         if (data.error != null) {
           console.log(data.error)
         }
         if (data.auth != null) {
           this.listCards = data.auth
           this.dataListProductsSucess()
         }
       })
  }
  dataListCartsSucess(){
      this.userSubscription = this.store.select(carts)
           .subscribe((data: any) =>{
             if (data.error != null) {
               console.log(data.error)
             }
             if (data.carts != null) {

              this.getProducts()
             }
      })
    }
    dataDeleteCartsSucess(){
        this.userSubscription = this.store.select(deleteCarts)
           .subscribe((data: any) =>{

             if (data.error != null) {
               console.log(data.error)
             }
             console.log(data)
             if (data.carts != null) {
              this.getProducts()
             }
           })
    }
  dataListProductsSucess(){
        this.userSubscription = this.store.select(subscriptionProducts)
           .subscribe((data: any) =>{

             if (data.error != null) {
               console.log(data.error)
             }
             if (data.carts != null) {
               this.listProductsData = data.carts.users
               this.validArray()
               //this.store.dispatch(action.loadingCarts());
             }
           })
  }
  validArray(){
    this.listProductsData.forEach((element: Background) => {
      this.shoppingValue = this.shoppingValue + parseInt(element.minimumAmount)
      if (element.subscribe) {
        let indexToUpdate2 = this.listCards.findIndex(item => item.id === element.id);
          if (indexToUpdate2 !== -1) {
            const nuevoArray = [
              ...this.listCards.slice(0, indexToUpdate2),
              { ...this.listCards[indexToUpdate2], subscribe: true },
              ...this.listCards.slice(indexToUpdate2 + 1)
            ];
              this.listCards = nuevoArray;
          }
      }
    });
  }
  getUsers() {
     this.store.dispatch(action.loadingUsers({item: RoutersLink.users}));
  }
  getProducts() {
    console.log("llego")
     this.store.dispatch(action.loadingProduct());
  }
}
