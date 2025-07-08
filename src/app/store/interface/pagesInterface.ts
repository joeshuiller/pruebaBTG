import { authUsers } from "./authUsersInterface";
import { background } from "./backgruondInterface ";
import { carts } from "./cartsInterface ";


export interface PagesStates{
    auth: authUsers,
    product: background,
    carts: carts,
    cartsList: carts,
    deleteCarts:carts
}
