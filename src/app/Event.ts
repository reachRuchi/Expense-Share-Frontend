export class Event{
    id: number;
    eventName: String;
    totalAmountSpent: number;

    constructor(id: number, eventName: String, totalAmountSpent: number){
        this.id = id;
        this.eventName = eventName;
        this.totalAmountSpent = totalAmountSpent;
    }
}