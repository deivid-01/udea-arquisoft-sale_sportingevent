import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportingEventsComponent } from './components/sporting-events/sporting-events.component';



const routes: Routes =[
  {
    path: "events",component: SportingEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
