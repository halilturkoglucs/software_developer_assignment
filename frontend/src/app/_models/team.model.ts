import {TeamStatus} from "./team-status.model";

export interface Team {
  id: number;
  name: string;
  managerApprovalStatus: TeamStatus;
  directorApprovalStatus: TeamStatus;
}
