import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Payment, PaymentsService } from 'src/app/services/payments/payments.service';

@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrls: ['./list-payments.component.scss']
})
export class ListPaymentsComponent implements OnInit {

  arrPayments: Payment[] = [];

  constructor(
        private paymentsService: PaymentsService,
        private modalService: ModalService

) { }

  ngOnInit(): void {
    this.paymentsService.getPayments$().subscribe(payments => {this.arrPayments = payments });
    this.arrPayments = this.paymentsService.getPayments();
    this.arrPayments = this.arrPayments.sort((objA, objB) => new Date(objB.paymentDate).getTime() - new Date(objA.paymentDate).getTime());  

  }
  
  createPayment(){
      this.modalService.open('ListPaymentsComponent');
  }

}
