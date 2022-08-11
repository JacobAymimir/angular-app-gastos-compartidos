import { Injectable } from "@angular/core";
import { PaymentsService, Payment } from "../payments/payments.service";
import { UsersService, User } from "../users/users.service";

export interface Balance {
  user: User;
  amount: number;

}

export interface Debt{
    paysTo: string;
    amount: number;
}

export interface Debts{
  user: string;
  debts: Debt[];
}


@Injectable({
  providedIn: "root",
})
export class BalancesService {
  constructor(
    private paymentsService: PaymentsService,
    private usersService: UsersService
  ) {}

  createBalances(arrPayments: Payment[], arrUsers: User[]): Balance[] {

    if (!arrPayments || arrUsers.length === 0) return [];

    let total:number = arrPayments.map((x) => +x.amount).reduce((a, b) => a + b, 0);
    let numMembers: number = arrUsers.length;
    let balances: Balance[] =[];
    let payments: any = {}; 
    console.log(total);
    arrUsers.forEach(usuario => {
        let balance: Balance = {
        user: usuario,
        amount: 0
      }
      payments[usuario.name] = 0;
      balances.push(balance);
    });

    arrPayments.forEach(payment => {
      let balanceToUpdate = balances.find((item => payment.user === item.user))
       if (balanceToUpdate !== undefined) {
          balanceToUpdate.amount += +payment.amount;
      }
    });

    balances.forEach(balance => {
      let totalPerMembers = total / numMembers;
      balance.amount = balance.amount - totalPerMembers;
    });
    balances.sort((a, b) => (b.amount - a.amount));
    return balances;


  }

  
  computePayments(balances: Balance[]): any {
    let sortedMostGenerous = Array.from(balances);
    let currMostGen = 0,
        currLeastGen = sortedMostGenerous.length - 1;

    let result: any = {};
    for (const member of sortedMostGenerous) {
      result[member.user.name] = [];
    }


     while (currMostGen < currLeastGen) {
        let mostGen = sortedMostGenerous[currMostGen];
        let leastGen = sortedMostGenerous[currLeastGen];

       
        if (mostGen.amount === 0 || leastGen.amount === 0) {
            currLeastGen--;
            currMostGen++;
        } else if (mostGen.amount + leastGen.amount > 0) {
            mostGen.amount += leastGen.amount;
            result[leastGen.user.name].push([
                mostGen.user.name, - leastGen.amount
            ]);
            currLeastGen--;
        } else if (mostGen.amount + leastGen.amount < 0) {
            leastGen.amount += mostGen.amount;
            result[leastGen.user.name].push([
                mostGen.user.name, mostGen.amount
            ]);
            currMostGen++;
        } else if (mostGen.amount + leastGen.amount === 0) {
            let aux = leastGen.amount;
            leastGen.amount += aux;
            mostGen.amount += aux;
            currLeastGen--;
            currMostGen++;
            result[leastGen.user.name].push([mostGen.user.name, aux]);
        }
    }

    console.log(result);
      return result;

      

  };
};

