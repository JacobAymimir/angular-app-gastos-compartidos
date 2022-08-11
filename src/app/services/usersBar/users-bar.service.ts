import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersBarService {
  private displayUsersBar = new BehaviorSubject<'open' | 'close'>('close');

  watch(): Observable<"open" | "close"> {
    return this.displayUsersBar.asObservable();
  }

  open() {
    this.displayUsersBar.next("open");
  }

  close() {
    this.displayUsersBar.next("close");
  }
}
