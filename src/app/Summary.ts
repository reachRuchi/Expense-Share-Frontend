import { Event } from './Event';
import { Friends } from './Friends';

export class Summary{
    id: number;
    event: Event;
    friend: Friends;
    amountOwed: number;
    amountLend: number;
    settledUp: boolean;

    constructor(id: number,event: Event,friend: Friends,amountOwed: number,amountLend: number,settledUp: boolean){
        this.id = id;
        this.event = event;
        this.friend = friend;
        this.amountOwed = amountOwed;
        this.amountLend = amountLend;
        this.settledUp = settledUp;
    }
}