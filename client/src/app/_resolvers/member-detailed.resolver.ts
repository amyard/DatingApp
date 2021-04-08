import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Member} from "../models/member";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {MembersService} from "../_services/members.service";

@Injectable({
  providedIn: 'root'
})
// to reduce error by clicking and message button -> redirect to detail page and we have  lot of errors in displaying data
export class MemberDetailedResolver implements Resolve<Member> {

  constructor(private memberService: MembersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    return this.memberService.getMember(route.paramMap.get('username'));
  }

}
