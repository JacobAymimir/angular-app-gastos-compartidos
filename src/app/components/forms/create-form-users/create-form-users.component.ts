import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-create-form-users',
  templateUrl: './create-form-users.component.html',
  styleUrls: ['./create-form-users.component.scss']
})
export class CreateFormUsersComponent implements OnInit {

  form: FormGroup;
  title: string = "Añadir usuario";
  constructor( private usersService: UsersService, private modalService: ModalService) { 
    this.form = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  ngOnInit(): void {
        this.form = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
    })
  }

   get f(){
    return this.form.controls;
  }

  onSubmit(){
 
        this.usersService.addUser(this.form.value);
        this.modalService.close();
        this.form.reset();
    }
  

    close() {
    this.modalService.close();
  }
}
