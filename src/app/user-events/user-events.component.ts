import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../Event';
import { SummaryService } from '../summary.service';
import { Summary } from '../Summary';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private summaryService:SummaryService, private router: Router) { }

  name: String;
  summary: Summary[];
  owedSummary: any = [];
  lendSummary: any = [];
  ngOnInit() {

    this.route.params.subscribe(params => {
        console.log(params['name']); // {order: "popular"}
        this.name = params['name'];    
    });

    this.summaryService.getSummaryByName(this.name).subscribe(res=>{
      this.summary = res;

      this.summary.forEach(s => {
        // console.log(s);  
        if(s.amountOwed !== 0){
            this.owedSummary.push(s);
          }else{
            this.lendSummary.push(s);
          }
      });


    })
  }

  settleUp(o){
    this.summaryService.settleUp(o).subscribe(res=>{
      console.log(res);
    });
    alert("Settled!");
    location.reload();
  }

}
