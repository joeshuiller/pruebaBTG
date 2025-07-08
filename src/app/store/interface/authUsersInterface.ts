import { Users } from "../models/userModels"

export interface authUsers{
    item:any,
    auth: Users,
    loaded: boolean,
    loading: boolean,
    error: any
}