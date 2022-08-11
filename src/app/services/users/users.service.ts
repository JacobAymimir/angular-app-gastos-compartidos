import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Group } from '../groups/groups.service';
import { UtilsService } from '../utils/utils.service';

export interface User {
  name: string;
  group: Group;
  img: String;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[];
  private users$: Subject<User[]>;

  constructor(    private utilService: UtilsService
) {
    this.users = [];
    this.users$ = new Subject();
   }

   addUser(user: User) {
    user.img = this.utilService.getMemberAvatarURL(user.name , 15);
    this.users.push(user);
    this.users$.next(this.users);
   }

   getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
   }
     getUsers() {
    return this.users;
  }

}
