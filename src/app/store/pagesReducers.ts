import { ActionReducerMap } from "@ngrx/store";
import { PagesStates } from "./interface/pagesInterface";
import * as reducer  from "./reducer";

export const pagesReducers: ActionReducerMap<PagesStates> = {
  auth: reducer.authReducer,
  product: reducer.productReducer,
  carts: reducer.ListCartsReducer,
  cartsList: reducer.CartsReducer,
  deleteCarts: reducer.CartsDeleteReducer
}
