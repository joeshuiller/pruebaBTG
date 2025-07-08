import { Action, createReducer, on } from "@ngrx/store";
import { dataListCartsSucess, dataProductSucess, dataUsersSucess, ListCartsError, loadingListCarts, loadingProduct, loadingUsers, productError, usersError } from "../../actions";

export const authInitialState: any = {
    item:null,
    auth: null,
    loaded: null,
    loading: null,
    error: null
}

const _authReducer = createReducer(
    authInitialState,
    on(dataUsersSucess, (state,{users}) =>({
        ...state,
        loading:false,
        loaded:true,
       auth:{...users}

    })),
    on(loadingUsers,  (state) =>({
        ...state,
        loading:true,

    })),
    on(usersError, (state, { payload }) =>({
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
export function authReducer(state: any, action: Action<string>){
    return _authReducer(state, action);
}


const _productReducer = createReducer(
    authInitialState,
    on(dataProductSucess, (state,{users}) =>({
        ...state,
        loading:false,
        loaded:true,
       auth:users

    })),
    on(loadingProduct,  (state) =>({
        ...state,
        loading:true,

    })),
    on(productError, (state, { payload }) =>({
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

export function productReducer(state: any, action: Action<string>){
    return _productReducer(state, action);
}
