export class Background {
    static fromApi(item: any){
        return new Background (
            item.id,
            item.name,
            item.minimumAmount,
            item.category,
            item.img,
            item.smallImg,
            item.subscribe
        )
    }
    constructor(
        public id: string,
        public name: string,
        public minimumAmount: string,
        public category: string,
        public img: string,
        public smallImg: string,
        public subscribe?: boolean
    ){}
}
