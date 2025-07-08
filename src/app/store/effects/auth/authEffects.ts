import { inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../../actions'
import { mergeMap } from "rxjs/operators";
import { AuthService } from "../../../services/auth.service";
import { Users } from "../../models/userModels";
import { Background } from "../../models/backgroundModels";

@Injectable()
export class authEffects{
  private action$= inject(Actions)
    constructor(
        private _https:AuthService,
    ){

    }
    auth$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingUsers),
            mergeMap(
                (item:any) => this._https.getData(item.item)
                .then(
                    (user: Users) => {
                        return auth.dataUsersSucess({users: user})
                    }
                ).catch(
                    (err: any) => auth.usersError({payload:err})
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
                    (user: Background) => {
                        return auth.dataProductSucess({users: user})
                    }
                ).catch(
                    (err: any) => auth.usersError({payload:err})
                )
            )
        )
    )

}
