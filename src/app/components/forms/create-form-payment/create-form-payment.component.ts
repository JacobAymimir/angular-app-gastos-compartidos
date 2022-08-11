import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal/modal.service';
import { PaymentsService } from 'src/app/services/payments/payments.service';
import { User, UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-create-form-payment',
  templateUrl: './create-form-payment.component.html',
  styleUrls: ['./create-form-payment.component.scss']
})
export class CreateFormPaymentComponent implements OnInit {

 form: FormGroup;
  title: string = "Añadir Pago";
  arrUsers: User[] = [];
  constructor( private paymentsService: PaymentsService, private modalService: ModalService, private usersService: UsersService) { 
    this.form = new FormGroup({
      description: new FormControl('', Validators.compose([Validators.minLength(1),Validators.required])),
      paymentDate: new FormControl('', Validators.compose([Validators.minLength(1),Validators.required])),  
      amount: new FormControl(),
      user: new FormControl('', Validators.compose([Validators.minLength(1),Validators.required])),
    })
    this.arrUsers = this.usersService.getUsers();

  }

  ngOnInit(): void {
  }

   get f(){
      return this.form.controls;
    }
  onSubmit(){

      this.form.value.amount = parseFloat(this.form.value.amount).toFixed(2);
        this.paymentsService.addPayment(this.form.value);
        this.modalService.close();
        this.form.reset();
    
  }

    close() {
    this.modalService.close();
  }
}
