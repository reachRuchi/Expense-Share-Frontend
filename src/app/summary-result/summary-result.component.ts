import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../Summary';
import { SummaryService } from '../summary.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary-result',
  templateUrl: './summary-result.component.html',
  styleUrls: ['./summary-result.component.css']
})
export class SummaryResultComponent implements OnInit {

  summary: Summary[];
  id: number;

  constructor(private summaryService: SummaryService,private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(params['id']); // {order: "popular"}
        this.id = params['id'];    
      });

      this.getSummaryByEvent();
      // location.reload();
  
  }

  getSummaryByEvent(){
    this.summaryService.getSummaryByEventId(this.id).subscribe(res=>{
      this.summary = res;
    });
  }

}
