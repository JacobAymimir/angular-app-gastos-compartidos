import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: ModalService) {       }


    createGroup(){
        this.modalService.open('HomeComponent');
    }

  ngOnInit(): void {
  }

}
