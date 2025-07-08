import { Component, Input, OnDestroy } from '@angular/core';
import { Background } from '../../store/models/backgroundModels';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { PagesStates } from '../../store/interface/pagesInterface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as action from '../../store/actions';
import { auth, carts, deleteCarts, subscriptionProducts } from '../../store/interface/link';
import { authUsers } from '../../store/interface/authUsersInterface';
import { Users } from '../../store/models/userModels';
import { loadingCartsDelete } from '../../store/actions/authActions';
@Component({
  selector: 'app-cards',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnDestroy{
  @Input() listData!: Background[];
  @Input() value!: any;
  public eventsData!: Background[];
  public eventsDataEnd!: Background[];
  public usersData!: Users;
  public userSubscription!: Subscription
  public alert:boolean = false
  constructor(
    private store: Store<PagesStates>,

  ){
    this.dataListProductsSucess()
    this.dataUsersSucess()
    setTimeout(() => {
      this.eventsDataEnd = this.listData
      console.log(this.value)
    }, 3000);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  dataUsersSucess(){
      this.userSubscription = this.store.select(auth)
         .subscribe((data: authUsers) =>{
           if (data.error != null) {
             console.log(data.error)
           }
           if (data.auth != null) {
             this.usersData = data.auth
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
             this.eventsData = data.carts.users
             //
           }
         })
  }

  remove(data:Background) {
    this.store.dispatch(action.loadingCartsDelete({id: parseInt(data.id)}));
  }
  add(item:Background) {
    const balance = parseInt(this.usersData.balance ? this.usersData.balance: "0")
    if (this.value < balance) {
      const data:Background = {
        id:item.id,
        name:item.name,
        minimumAmount:item.minimumAmount,
        category:item.category,
        img:item.img,
        smallImg:item.smallImg,
        subscribe: true
      }
      const suma = this.value + parseInt(item.minimumAmount)
      console.log(suma )
      if (suma < balance) {
        this.store.dispatch(action.loadingListCarts({item: data}));
      }else{
        this.alert= true
      }

    }else{
      this.alert= true
    }

  }
  close(){
    this.alert= false
  }
}
