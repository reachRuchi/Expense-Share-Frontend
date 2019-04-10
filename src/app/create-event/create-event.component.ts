import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';
import { Friends } from '../Friends';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { OweLend } from '../oweLend';
import { NumberFormatStyle } from '@angular/common';
import { Summary } from '../Summary';
import { Event } from '../Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

   friends: Friends[];
   oweLend: any = [];
   summaryForm: FormGroup;
   summary: any = [];
   id: number;

  constructor(private summaryService: SummaryService, private router: Router) { 
  
  }

  ngOnInit() {
    
    this.getAllFriends();

    this.summaryForm = new FormGroup({
      eventName: new FormControl(''),
      totalAmountSpent: new FormControl(''),  
      friend: new FormControl(''),
        
    });
    
  }

  //friends list
  getAllFriends(){
    
    this.summaryService.getFriendsList().subscribe(res=>{
        this.friends = res;
    });

  }

  selectedFriend(friend, s){
    console.log(s);
    if( s === 'lend'){
      
      let oweLend = new OweLend(friend,0);
      this.oweLend.push(oweLend);
    }else{
      
      let oweLend = new OweLend(friend,1);
      this.oweLend.push(oweLend);
    }
    
  }

  onSubmit(){
    this.summary = [];
    console.log("on submit", this.oweLend);
    console.log(this.summaryForm.controls['eventName'].value)
    let savedEvent:Event;
    

    let event = new Event(
            null,
            this.summaryForm.controls['eventName'].value,
            this.summaryForm.controls['totalAmountSpent'].value
    );
    

    this.summaryService.createEvent(event).subscribe(res=>{
      savedEvent = res;
      console.log("saved",savedEvent);
      this.id = savedEvent.id;

    //Split the money
    let totalAmount = this.summaryForm.controls['totalAmountSpent'].value;
    console.log(totalAmount);

    let countFriends: number = 0;
    let lendFriend: any;

    for (var i in this.oweLend) {
      countFriends++;
    }

    let eachPersonSpends = totalAmount / countFriends;
    console.log("each person spends", eachPersonSpends);

    for(var i in this.oweLend){

      if(JSON.stringify(this.oweLend[i].owesOrLends) === "0"){

            let summaryResult = new Summary(
              null,
              savedEvent,
              this.oweLend[i].friend,
              0,
              totalAmount,
              false
            );
    
              console.log("Lender",summaryResult)
              this.summaryService.createSummary(summaryResult).subscribe(res=>{
                console.log("Lender",res);
                this.summary.push(res);
              });
      

      }else{
        
        let summaryResult = new Summary(
          null,
          savedEvent,
          this.oweLend[i].friend,
          eachPersonSpends,
          0,
          false
        );

          console.log("Owes",summaryResult)
          this.summaryService.createSummary(summaryResult).subscribe(res=>{
            console.log("Owes",res);
            this.summary.push(res);
          });

  
      }

    }
      
      totalAmount = 0;
      countFriends = 0;
      this.oweLend = [];
      console.log("summary array", this.summary);
      alert("Event Created Successfully");
      this.router.navigate(['/summaryResult/'+this.id]);

    });
   
      

  }
}
     
      
    
 
  
