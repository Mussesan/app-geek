export class User {

    constructor(
        public id:              number,
        public name:            string,
        public email:           string, 
        public password:        string,
        public password_check:  string,
        public phone:           number, 
        public birth_date:      Date,
        public nickname:        string,
        public status:          boolean,
        public online:          boolean,
        public reputation: number
    ){}

    
    
}