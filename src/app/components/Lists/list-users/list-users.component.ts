import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { User, UsersService } from 'src/app/services/users/users.service';
import { UsersBarService } from 'src/app/services/usersBar/users-bar.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  arrUsers: User[] = [];

  constructor(private usersBarService: UsersBarService,
        private usersService: UsersService,
        private modalService: ModalService

) { }

  ngOnInit(): void {
    this.usersService.getUsers$().subscribe(users => {this.arrUsers = users; });
    this.arrUsers = this.usersService.getUsers();

  }
      createUser(){
        this.modalService.open('ListUsersComponent');
    }
}
