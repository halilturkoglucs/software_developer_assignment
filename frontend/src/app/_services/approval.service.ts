import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject, Subscription} from 'rxjs';
import { environment } from "../../environments/environment";
import {Team} from "../_models/team.model";
import {TeamStatus} from "../_models/team-status.model";
import {SetApprovalStatusRequest} from "../_models/set-approval-status-request.model";

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  teams = new Subject<Team[]>();

  constructor(private http: HttpClient) { }

  getTeams() {
    this.http.get<Team[]>(environment.TEAM_API_URL + 'all').subscribe(res => {
      // Update teams data
      this.teams.next(res);
    }, error => {
      console.log(error);
      this.teams.next([]);
    });
  }

  setManagerApprovalStatus(teamId: number, status: TeamStatus): Observable<any> {
    let body: SetApprovalStatusRequest = {
      teamId: teamId,
      status: status
    }
    return this.http.post(environment.TEAM_API_URL + 'setManagerApprovalStatus', body, { responseType: 'text'});
  }

  setDirectorApprovalStatus(teamId: number, status: TeamStatus): Observable<any> {
    let body: SetApprovalStatusRequest = {
      teamId: teamId,
      status: status
    }

    return this.http.post(environment.TEAM_API_URL + 'setDirectorApprovalStatus', body, { responseType: 'text' });
  }
}
