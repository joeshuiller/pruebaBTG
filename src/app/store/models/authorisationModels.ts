export class Authorisation {
   static fromApi(item: any){
        return new Authorisation(
            item.token,
            item.type,
            item.expires_in,
        )
   }
    constructor(
        public accessToken?: string,
        public tokenType?: string,
        public expiresIn?: number,
    ){

    }
}
