export class User {

    constructor(
    public id: number,
    public name: string, //required
    public email: string, //required
    public password: string, //required
    public password_check: string, //required
    public phone: number, //required
    public birth_date: Date, //required
    public nickname: string,
    public profile_descript: string,
    public status: boolean,
    public online: boolean,
    public reputation: number
    ){}

    
    
}