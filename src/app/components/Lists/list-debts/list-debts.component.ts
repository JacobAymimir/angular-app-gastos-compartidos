import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Balance, BalancesService, Debt, Debts } from 'src/app/services/balances/balances.service';
import { Payment, PaymentsService } from 'src/app/services/payments/payments.service';
import { User, UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-list-debts',
  templateUrl: './list-debts.component.html',
  styleUrls: ['./list-debts.component.scss']
})
export class ListDebtsComponent implements OnInit {
  arrBalances: Balance[] = [];
  arrPayments: Payment[] = [];
  arrUsers: User[] = [];
  debts: Debts[] = [];
  arrDebtsUser: Debt[] =  []; 

  constructor(
        private paymentsService: PaymentsService,
        private computeBalancesService: BalancesService, 
        private usersService: UsersService,

) { 
    this.paymentsService.getPayments$().subscribe(payments => {this.arrPayments = payments; });
    this.arrPayments = this.paymentsService.getPayments();

    this.usersService.getUsers$().subscribe(users => {this.arrUsers = users; });
    this.arrUsers = this.usersService.getUsers();
    this.arrBalances = [...this.computeBalancesService.createBalances(this.arrPayments, this.arrUsers)];
    this.debts = this.computeBalancesService.computePayments([...this.computeBalancesService.createBalances(this.arrPayments, this.arrUsers)]);
    
    console.log(this.arrBalances);
    console.log(this.debts);
    console.log(Object.entries(this.debts));
 
/*     this.debts.forEach(debtor => {
        console.log(debtor);
  
    }); */

/*     this.debts.map */

}

  ngOnInit(): void {

  }


  
}
