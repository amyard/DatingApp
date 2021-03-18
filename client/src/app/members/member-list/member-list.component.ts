import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/_services/members.service';
import {Pagination} from "../../models/pagination";
import {UserParams} from "../../models/userParams";
import {AccountService} from "../../_services/account.service";
import {take} from "rxjs/operators";
import {User} from "../../models/user";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
   members: Member[];
   pagination: Pagination;
   userParams: UserParams;
   user: User;
   genderList = [{value:'male', display:'Males'}, {value:'female', display: 'Females'}];

   // because we need User in UserParams to filter by gender, we initialize here the user
  constructor(private membersService: MembersService, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
      this.userParams = new UserParams(user);
    })
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.membersService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  resetFilters() {
    this.userParams = new UserParams(this.user);
    this.loadMembers();
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page;
    this.loadMembers();
  }
}
