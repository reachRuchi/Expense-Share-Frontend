import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { SummaryResultComponent } from './summary-result/summary-result.component';
import { UserEventsComponent } from './user-events/user-events.component';

const routes: Routes = [
  { path: '', redirectTo: 'createEvent', pathMatch: 'full' },
  { path: 'createEvent', component: CreateEventComponent },
  { path: 'summaryResult/:id', component: SummaryResultComponent },
  { path: 'events/:name', component: UserEventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
