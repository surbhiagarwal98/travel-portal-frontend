export class User{

    constructor(
        public username:string,
        public password:string,
        public firstName : string,
        public lastName : string,
        public businessUnit: string,
        public title : string,
        public email : string,
        public telephone : string,
        public address1 : string,
        public address2 : string,
        public city : string,
        public state : string,
        public zip : number,
        public country : string
    ){}
}