import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Payment } from '../payments/payments.service';
import { User } from '../users/users.service';
import { UtilsService } from '../utils/utils.service';

export interface Group {
  name: string;
  users: User[];
  payments: Payment[];
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private groups: Group[];
  private groups$: Subject<Group[]>;

  constructor(private utilService: UtilsService) {
    this.groups = [];
    this.groups$ = new Subject();
   }

   addGroup(group: Group) {
    group.img = this.utilService.getGroupAvatarURL(group.name , 40);

    this.groups.push(group);
    this.groups$.next(this.groups);
   }

   getGroups$(): Observable<Group[]> {
    return this.groups$.asObservable();
   }
  getGroups() {
    return this.groups;
  }

  returnGroupByName(name: String): Group{
  return this.groups.find((obj) => {
      return obj.name === name;
    })as Group;    
  }
}
