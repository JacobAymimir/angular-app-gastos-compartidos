import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDebtsComponent } from './components/Lists/list-debts/list-debts.component';
import { ListPaymentsComponent } from './components/Lists/list-payments/list-payments.component';
import { GroupViewComponent } from './views/group-view/group-view.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFountComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'viewGroup/:name',
      component: GroupViewComponent,    
      children: [
      {
        path:'', redirectTo:'payments', pathMatch: "full"
      },
      {
        path:'payments', component: ListPaymentsComponent
      },
      {
        path:'debts', component: ListDebtsComponent
      }
    ]
  },
  {
      path: '**',
      component: PageNotFountComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
