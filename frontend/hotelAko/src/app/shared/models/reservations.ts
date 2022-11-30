export class Reservations {
    id?: number;
    endDate: Date;
    startDate: Date;
    apartmentId: number;
    appUserId: number;

    constructor(endDate: Date, startDate: Date, apartmentId:number,  appUserId: number) {
        this.endDate = endDate;
        this.startDate = startDate;
        this.appUserId = appUserId;
        this.apartmentId = apartmentId;
    }
}
