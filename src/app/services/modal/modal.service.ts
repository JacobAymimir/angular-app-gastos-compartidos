import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

export interface Modal {
  displayModal: BehaviorSubject<'open' | 'close'>; //Or string instead of number
  optionsModal: {
    view: string,
  };
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private displayModal = new BehaviorSubject<'open' | 'close'>('close');
  private modal: Modal = {
    displayModal: this.displayModal,
    optionsModal: {
      view: '',
    },
  };
  private viewModal$: Subject<string>;

   constructor() {
    this.viewModal$ = new Subject();
   }

  watch(): Observable<"open" | "close"> {
    return this.displayModal.asObservable();
  }

  watch2$(): Observable<string> {
    return this.viewModal$.asObservable();
  }

  getTitle() {
    return this.modal.optionsModal.view;
  }

  open(view:string) {
    this.displayModal.next("open");
    this.modal.optionsModal.view = view;
    this.viewModal$.next(view.toString());

  }

  close() {
    this.displayModal.next("close");
  }

  returnModal(){
    return this.modal;
  }


}
