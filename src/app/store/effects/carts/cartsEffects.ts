import { inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../../actions'
import { mergeMap } from "rxjs/operators";
import { AuthService } from "../../../services/auth.service";
import { Users } from "../../models/userModels";
import { Background } from "../../models/backgroundModels";
import { CartSubscribeService } from "../../../services/cart-subscribe.service";

@Injectable()
export class cartsEffects{
  private action$= inject(Actions)
    constructor(
        private _https:CartSubscribeService,
    ){

    }
    auth$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingListCarts),
            mergeMap(
                (item:any) => this._https.create(item.item)
                .then(
                    (user: any) => {
                        return auth.dataListCartsSucess({users: user})
                    }
                ).catch(
                    (err: any) => auth.ListCartsError({payload:err})
                )
            )
        )
    )
    products$ = createEffect(
            () => this.action$.pipe(
                ofType(auth.loadingProduct),
                mergeMap(
                    () => this._https.getProducts()
                    .then(
                        (user: any) => {
                            return auth.dataCartsSucess({users: user})
                        }
                    ).catch(
                        (err: any) => auth.CartsError({payload:err})
                    )
                )
            )
    )
    productsDelete$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingCartsDelete),
            mergeMap(
                (item:any) => this._https.deleteProducts(item.id)
                .then(
                    (user: any) => {
                        return auth.dataCartsDeleteSucess({users: user})
                    }
                ).catch(
                    (err: any) => auth.CartsDeleteError({payload:err})
                )
            )
        )
    )

}
