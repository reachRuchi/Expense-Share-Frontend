import { Friends } from './Friends';

export class OweLend{
    friend: Friends;
    owesOrLends: number;

    constructor(friend: Friends,owesOrLends: number){
        this.friend = friend;
        this.owesOrLends = owesOrLends;
    }
}