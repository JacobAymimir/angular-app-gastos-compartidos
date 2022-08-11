import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../users/users.service';

export interface Payment {
  description: string;
  paymentDate: Date;
  amount: number;
  user: User;

}
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private payments: Payment[];
  private payments$: Subject<Payment[]>;

  constructor() {
    this.payments = [];
    this.payments$ = new Subject();
   }

   addPayment(payment: Payment) {
    this.payments.push(payment);
    this.payments$.next(this.payments);
   }

   getPayments$(): Observable<Payment[]> {
    return this.payments$.asObservable();
   }
     getPayments() {
    return this.payments;
  }

}
