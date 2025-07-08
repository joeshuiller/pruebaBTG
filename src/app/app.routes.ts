import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"shoppingCart", component: ShoppingCartComponent},
  {path:"userDetais", component: UserDetailsComponent},
  {path:"**",component: NotFoundComponent}
];
