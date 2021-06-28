package com.assignment.backend.payload.request;

import com.assignment.backend.models.ETeamStatus;

import javax.validation.constraints.NotBlank;

public class SetApprovalStatusRequest {
    @NotBlank
    Long teamId;

    @NotBlank
    ETeamStatus status;

    public Long getTeamId() {
        return this.teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public ETeamStatus getStatus() {
        return this.status;
    }

    public void setStatus(ETeamStatus status) {
        this.status = status;
    }
}
