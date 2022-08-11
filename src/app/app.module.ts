import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormGroupComponent } from './components/forms/create-form-group/create-form-group.component';
import { CreateFormPaymentComponent } from './components/forms/create-form-payment/create-form-payment.component';
import { CreateFormUsersComponent } from './components/forms/create-form-users/create-form-users.component';
import { ListDebtsComponent } from './components/Lists/list-debts/list-debts.component';
import { ListGroupsComponent } from './components/Lists/list-groups/list-groups.component';
import { ListPaymentsComponent } from './components/Lists/list-payments/list-payments.component';
import { ListUsersComponent } from './components/Lists/list-users/list-users.component';
import { ModalComponent } from './components/modal/modal.component';
import { UsersBarComponent } from './components/users-bar/users-bar.component';
import { AutofocusDirective } from './Directives/formFocus';
import { GroupViewComponent } from './views/group-view/group-view.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFountComponent } from './views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    CreateFormGroupComponent,
    ListGroupsComponent,
    PageNotFountComponent,
    GroupViewComponent,
    UsersBarComponent,
    ListUsersComponent,
    CreateFormUsersComponent,
    AutofocusDirective,
    ListPaymentsComponent,
    CreateFormPaymentComponent,
    ListDebtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
