export class Apartment {
    id?: number;
    amount: number;
    type: string;
    typeImg: string;
    image:Blob;
    description: string;
    price: number;

    constructor(type: string, image: Blob, typeImg:string,  description: string, price: number, amount: number) {
        this.type = type;
        this.description = description;
        this.price = price;
        this.amount = amount;
        this.image = image;
        this.typeImg = typeImg;
    }
}
