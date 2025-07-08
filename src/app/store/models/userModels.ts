export class Users {
    static fromApi(item: any){
        return new Users (
            item.id,
            item.name,
            item.surName,
            item.telephone,
            item.documentType,
            item.documentNumber,
            item.email,
            item.img,
            item.balance
        )
    }
    constructor(
        public id: number,
        public name?: string,
        public surName?: string,
        public telephone?: number,
        public documentType?: string,
        public identificationCard?: number,
        public email?: string,
        public img?: string,
        public balance?: string,
    ){}
}
