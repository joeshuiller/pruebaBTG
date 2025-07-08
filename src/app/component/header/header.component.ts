import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PagesStates } from '../../store/interface/pagesInterface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as action from '../../store/actions';
import { Users } from '../../store/models/userModels';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public listCards: any[] = []
  public userSubscription!: Subscription
  public loading:boolean =false
  public eventsData!: Users;
  constructor(
    private store: Store<PagesStates>
  ){
    this.dataCategorySucess()
  }
  dataCategorySucess(){
    this.userSubscription = this.store.select('auth')
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
         if (data.auth != null) {
           this.eventsData = data.auth
         }
       })
  }
}
