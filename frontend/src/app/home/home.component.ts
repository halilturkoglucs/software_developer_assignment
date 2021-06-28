import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {TokenStorageService} from "../_services/token-storage.service";
import {ApprovalService} from "../_services/approval.service";
import {Observable, Subject, Subscription} from "rxjs";
import {Team} from "../_models/team.model";
import {TeamStatus} from "../_models/team-status.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  authorizedToApprove: boolean = false;
  teams:Team[] = [];
  teamsSub: Subscription | undefined;

  statusChanged: boolean = false;
  statusSavedMsg = "Team Status Saved";

  constructor(private userService: UserService,
              private tokenStorageService: TokenStorageService,
              private approvalService: ApprovalService) { }

  ngOnInit(): void {
    this.authorizedToApprove = this.tokenStorageService.authorizedToApprove();

    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    // Fetch teams asynchronously
    this.teamsSub = this.approvalService.teams.subscribe(teams => {
      this.teams = teams;
    });
    this.approvalService.getTeams();
  }

  getWelcomeMessageClass() {
    return 'centered welcomeMsg';
  }

  getStatusIcon(status: TeamStatus) {
    switch (status) {
      case TeamStatus.NOT_ASSIGNED:
        return 'not-assigned-icon.png';
      case TeamStatus.APPROVED:
        return 'approved-icon.png';
      case TeamStatus.NOT_APPROVED:
        return 'not-approved-icon.png';
      default:
        return 'not-assigned-icon.png';
    }
  }

  getStatusTooltip(status: TeamStatus) {
    return 'The status is ' + status;
  }

  setManagerApprovalStatus(teamId: number, currentStatus: TeamStatus) {
    let authorizedToApproveAsManager = this.tokenStorageService.authorizedToApproveAsManager();

    if (authorizedToApproveAsManager) {
      let nexStatus = this.getNextApprovalStatus(currentStatus);

      this.approvalService.setManagerApprovalStatus(teamId, nexStatus).subscribe(res => {
        // Update status of the team on the table
        let team = this.teams.filter(team => team.id === teamId)[0];
        team.managerApprovalStatus = nexStatus;
        this.statusSavedMsg = "Team Status Saved";
        this.statusChanged = true;
      }, error => {
        this.statusSavedMsg = "Team Status could not be saved due to error. Check console logs.";
        this.statusChanged = true;
        console.log(error);
      });
    } else {
      this.statusSavedMsg = "You are not authorized for this action. You need manager role for this.";
      this.statusChanged = true;
    }
  }

  setDirectorApprovalStatus(teamId: number, currentStatus: TeamStatus) {
    let authorizedToApproveAsDirective = this.tokenStorageService.authorizedToApproveAsDirector();

    if (authorizedToApproveAsDirective) {
      let nexStatus = this.getNextApprovalStatus(currentStatus);

      this.approvalService.setDirectorApprovalStatus(teamId, nexStatus).subscribe(res => {
        let team = this.teams.filter(team => team.id === teamId)[0];
        team.directorApprovalStatus = nexStatus;
        this.statusSavedMsg = "Team Status Saved";
        this.statusChanged = true;
      }, error => {
        this.statusSavedMsg = "Team Status could not be saved due to error. Check console logs.";
        this.statusChanged = true;
        console.log(error);
      });
    } else {
      this.statusSavedMsg = "You are not authorized for this action. You need director role for this.";
      this.statusChanged = true;
    }
  }

  private getNextApprovalStatus(currentStatus: TeamStatus): TeamStatus {
    switch (currentStatus) {
      case TeamStatus.NOT_ASSIGNED:
        return TeamStatus.APPROVED;
      case TeamStatus.APPROVED:
        return TeamStatus.NOT_APPROVED;
      case TeamStatus.NOT_APPROVED:
        return TeamStatus.NOT_ASSIGNED;
      default:
        return TeamStatus.NOT_ASSIGNED;
    }
  }

  onAlertBoxClose() {
    this.statusChanged = false;
  }
}
