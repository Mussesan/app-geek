export class User {
    
    constructor(
        public id: number,
        public nickname: string,
        public name: string,
        public email: string,
        public password: string,
        public phone: number,
        public birth_date: Date,
        public profile_descript: string,
        public status: boolean,
        public online: boolean,
        public reputation: number
    ){}
}