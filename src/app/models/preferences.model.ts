export class Preferences {

    constructor(
        public id: number,
        public title: string,
        public descricption: string,
        public detail_primary: string,
        public detail_secondary: string,
        public detail_tertiary: string,
        public status: boolean,
        public affinity: number
    ){}
}