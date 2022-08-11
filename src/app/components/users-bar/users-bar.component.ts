import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UsersBarService } from 'src/app/services/usersBar/users-bar.service';

@Component({
  selector: 'app-users-bar',
  templateUrl: './users-bar.component.html',
  styleUrls: ['./users-bar.component.scss']
})
export class UsersBarComponent implements OnInit {

  displayUsersBar$ = new Observable<'open' | 'close'>(close);

  constructor(
      private usersBarService: UsersBarService
  ) {}

  ngOnInit() {
    this.displayUsersBar$ = this.usersBarService.watch();
    
  }

  close() {
    this.usersBarService.close();
  }


}
