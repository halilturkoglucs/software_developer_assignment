import {TeamStatus} from "./team-status.model";

export interface SetApprovalStatusRequest {
  teamId: number;
  status: TeamStatus;
}
