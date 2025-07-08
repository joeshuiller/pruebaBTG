import { Component } from '@angular/core';
import { LoadingComponent } from '../../component/loading/loading.component';
import { CardsComponent } from '../../component/cards/cards.component';
import { Background } from '../../store/models/backgroundModels';
import { Subscription } from 'rxjs';
import { Users } from '../../store/models/userModels';
import { PagesStates } from '../../store/interface/pagesInterface';
import { Store } from '@ngrx/store';
import { subscriptionProducts } from '../../store/interface/link';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  imports: [CardsComponent, LoadingComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  public loading:boolean =false
  public listCards: Background[] = []
    public userSubscription!: Subscription
    public eventsData!: Users;
    public shoppingValue:number=0
    public listProductsData: Background[] = []
    constructor(
      private store: Store<PagesStates>,
      private router:Router
    ){
      this.dataListProductsSucess()
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
