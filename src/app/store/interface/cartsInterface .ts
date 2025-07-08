import { Background } from "../models/backgroundModels"
import { Users } from "../models/userModels"

export interface carts{
    item:any,
    auth: Background[],
    loaded: boolean,
    loading: boolean,
    error: any
}
