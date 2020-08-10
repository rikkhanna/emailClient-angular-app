import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children:[
      {
        path:'',
        component: PlaceholderComponent
      },
      {
        path:':id', //capture any route that looks like /inbox/id 
        // colon is sort of a wildcard and  specify that we want to capture any variable or any string whatsoever and it as variable id
        component: EmailShowComponent
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
