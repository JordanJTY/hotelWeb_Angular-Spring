export interface ILoginResponse {
    id?:number;
    username: string;
    email:string;
    dateBirth: Date;
    roles: []
    accessToken: string;
}
