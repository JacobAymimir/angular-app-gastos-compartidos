import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group, GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit {
  arrGroups: Group[] = [];
  constructor(
    private groupsService: GroupsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.groupsService.getGroups$().subscribe(groups => {this.arrGroups = groups; });
    this.arrGroups = this.groupsService.getGroups();
  }
  
  accesGroup(group: Group): void{
  this.router.navigate(['viewGroup', group.name], {relativeTo:this.route});
  }

}
