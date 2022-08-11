import {  Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-create-form-group',
  templateUrl: './create-form-group.component.html',
  styleUrls: ['./create-form-group.component.scss']
})
export class CreateFormGroupComponent implements OnInit {

private inputToFocus: any;
 form: FormGroup;
  title: String= "Creación de Grupo";
  constructor(  private groupsService: GroupsService, private modalService: ModalService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([Validators.minLength(1),Validators.required])),
    })
    console.log(this.form.controls)
  }
 get f(){
    return this.form.controls;
  }
  onSubmit(){
 
        this.groupsService.addGroup(this.form.value);
        this.modalService.close();
        this.form.reset();
    
  }


    close() {
    this.modalService.close();
  }
}
