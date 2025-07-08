import { Component } from '@angular/core';
import { PagesStates } from '../../store/interface/pagesInterface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as action from '../../store/actions';
import { Users } from '../../store/models/userModels';
import { authUsers } from '../../store/interface/authUsersInterface';
import { auth, subscriptionProducts } from '../../store/interface/link';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Background } from '../../store/models/backgroundModels';
import { LoadingComponent } from '../../component/loading/loading.component';
import { CardsComponent } from '../../component/cards/cards.component';
@Component({
  selector: 'app-user-details',
  imports: [CurrencyPipe, CardsComponent, LoadingComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  public usersData!: Users;
  public userSubscription!: Subscription
  public alert:boolean = false
  public listProductsData: Background[] = []
  public loading:boolean =false
  constructor(
    private store: Store<PagesStates>,
    private router:Router
  ){
    this.dataUsersSucess()
    this.dataListProductsSucess()
  }
  dataUsersSucess(){
        this.userSubscription = this.store.select(auth)
           .subscribe((data: authUsers) =>{
             if (data.error != null) {
               console.log(data.error)
             }
             if (data.auth != null) {
               this.usersData = data.auth
             } else{
              this.router.navigate(['/']);
             }
           })
  }
  dataListProductsSucess(){
            this.userSubscription = this.store.select(subscriptionProducts)
               .subscribe((data: any) =>{
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
                 if (data.carts != null) {
                  console.log(data)
                   this.listProductsData = data.carts.users
                 }else{
                  this.router.navigate(['/']);
                 }
               })
  }
}
