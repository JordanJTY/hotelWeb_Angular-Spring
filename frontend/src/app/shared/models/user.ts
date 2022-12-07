export class User {
    id?:number;
    email:string;
    username:string;
    password:string;
    dateBirth:Date;

    constructor(username:string, email:string, password:string, dateBirth:Date){
        this.email = email;
        this.username = username;
        this.password = password;
        this.dateBirth = dateBirth;
    }
}
