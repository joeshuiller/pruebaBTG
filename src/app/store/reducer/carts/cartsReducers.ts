import { Action, createReducer, on } from "@ngrx/store";
import { CartsDeleteError, CartsError, dataCartsDeleteSucess, dataCartsSucess, dataListCartsSucess, ListCartsError, loadingCarts, loadingCartsDelete, loadingListCarts } from "../../actions";

export const cartsInitialState: any = {
    item:null,
    carts: null,
    loaded: null,
    loading: null,
    error: null
}

const _ListCartsReducer = createReducer(
    cartsInitialState,
    on(dataListCartsSucess, (state,users) =>({
        ...state,
        loading:false,
        loaded:true,
       carts:users

    })),
    on(loadingListCarts,  (state) =>({
        ...state,
        loading:true,

    })),
    on(ListCartsError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }

    }))
)

export function ListCartsReducer(state: any, action: Action<string>){
    return _ListCartsReducer(state, action);
}

const _CartsReducer = createReducer(
    cartsInitialState,
    on(dataCartsSucess, (state,users) =>({
        ...state,
        loading:false,
        loaded:true,
       carts:users

    })),
    on(loadingCarts,  (state) =>({
        ...state,
        loading:true,

    })),
    on(CartsError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }

    }))
)

export function CartsReducer(state: any, action: Action<string>){
    return _CartsReducer(state, action);
}
const _CartsDeleteReducer = createReducer(
    cartsInitialState,
    on(dataCartsDeleteSucess, (state,users) =>({
        ...state,
        loading:false,
        loaded:true,
       carts:users

    })),
    on(loadingCartsDelete,  (state) =>({
        ...state,
        loading:true,

    })),
    on(CartsDeleteError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }

    }))
)

export function CartsDeleteReducer(state: any, action: Action<string>){
    return _CartsDeleteReducer(state, action);
}
