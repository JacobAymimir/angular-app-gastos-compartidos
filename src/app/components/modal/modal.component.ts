import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  display$ = new Observable<'open' | 'close'>(close);
  view$= new Observable<string>();
  routeComponent = this.route.snapshot.routeConfig?.component?.name;
  title!: string;
/*     group: Group  = this.groupsService.returnGroupByName(String(this.groupName));
 */
  constructor(
      private modalService: ModalService,
      private route: ActivatedRoute,
      
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
    this.modalService.watch2$().subscribe(view => {this.title = view;});

  }

  close() {
    this.modalService.close();
  }

}
