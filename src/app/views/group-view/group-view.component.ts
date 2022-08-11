import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group, GroupsService } from 'src/app/services/groups/groups.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UsersBarService } from 'src/app/services/usersBar/users-bar.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss']
})
export class GroupViewComponent implements OnInit {
    arrGroups: Group[] | undefined;
    groupName = this.route.snapshot.paramMap.get('name');
    group: any  = this.groupsService.returnGroupByName(String(this.groupName));

  constructor(    
    private groupsService: GroupsService,
    private route: ActivatedRoute,
    private router: Router,
    private usersBarService: UsersBarService
) {
    this.arrGroups = this.groupsService.getGroups();
    this.group ? '' : this.router.navigate(['']);

 }

  ngOnInit(): void {
    };
    
    openUserList(){
        this.usersBarService.open();

      }

      onClickLinkDebts(){
          this.router.navigate(['debts'], {relativeTo:this.route});
      }
       onClickLinkPayments(){
          this.router.navigate(['payments'], {relativeTo:this.route});
      }
  
};

  

