import { createAction, props } from "@ngrx/store";
import { Users } from "../models/userModels";
import { Background } from "../models/backgroundModels";

export const loadingUsers = createAction('[Auth] loadingUsers', props<{item: string}>());
export const dataUsersSucess = createAction('[Auth] setUsers',props<{ users: Users}>());
export const usersError = createAction('[Auth] usersError',props<{payload: any}>());
//cretae users
export const loadingProduct = createAction('[Auth] loadingProduct');
export const dataProductSucess = createAction('[Auth] setProduct',props<{ users: any}>());
export const productError = createAction('[Auth] ProductError',props<{payload: any}>());
//List create product
export const loadingCreatProduct = createAction('[Auth] loadingCreatProduct', props<{item: any}>());
export const dataCreatProductSucess = createAction('[Auth] setCreatProduct',props<{ users: any}>());
export const creatProductError = createAction('[Auth] CreatProductError',props<{payload: any}>());
//List create carts
export const loadingListCarts = createAction('[Auth] loadingListCarts', props<{item: Background}>());
export const dataListCartsSucess = createAction('[Auth] setListCarts',props<{ users: Background[]}>());
export const ListCartsError = createAction('[Auth] ListCartsError',props<{payload: any}>());
//List carts
export const loadingCarts = createAction('[Auth] loadingCarts');
export const dataCartsSucess = createAction('[Auth] setCarts',props<{ users: Background[]}>());
export const CartsError = createAction('[Auth] CartsError',props<{payload: any}>());
//Delete carts
export const loadingCartsDelete = createAction('[Auth] loadingCartsDelete',props<{ id: number}>());
export const dataCartsDeleteSucess = createAction('[Auth] setCartsDelete',props<{ users: Background}>());
export const CartsDeleteError = createAction('[Auth] CartsDeleteError',props<{payload: any}>());
