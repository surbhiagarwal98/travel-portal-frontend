export class Ticket{
    constructor(
        public ticketId: number,
        public requestType:string,
        public priority:string,
        public locationTo : string,
        public locationFrom : string,
        public startDate: string,
        public endDate : string,
        public passportNo : string,
        public projectName : string,
        public expenseBearer : string,
        public travelApprover : string,
        public expectedTravelDuration : string,
        public maxAllowedAmount : number,
        public description : string,
        public ticketStatus : string
    ){}
}