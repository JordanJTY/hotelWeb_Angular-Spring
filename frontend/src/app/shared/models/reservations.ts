import { Apartment } from "./apartment";
import { User } from "./user";

export class Reservations {
    id?: number;
    endDate: Date;
    startDate: Date;
    apartment: Apartment;
    appUser: User;

    constructor(endDate: Date, startDate: Date, apartment: Apartment, appUser: User, id?:number) {
        this.endDate = endDate;
        this.startDate = startDate;
        this.appUser = appUser;
        this.apartment = apartment;
        this.id = id;
    }
}
