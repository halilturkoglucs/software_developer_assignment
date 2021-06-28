package com.assignment.backend.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "TEAMS",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "NAME")
        })
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 200)
    private String name;

    @Column(length = 20, columnDefinition = "varchar(20) default 0")
    private ETeamStatus managerApprovalStatus;

    @Column(length = 20, columnDefinition = "varchar(20) default 0")
    private ETeamStatus directorApprovalStatus;

    public Team() {
    }

    public Team(String name, ETeamStatus managerApprovalStatus, ETeamStatus directorApprovalStatus) {
        this.name = name;
        this.managerApprovalStatus = managerApprovalStatus;
        this.directorApprovalStatus = directorApprovalStatus;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public ETeamStatus getManagerApprovalStatus() { return this.managerApprovalStatus; }

    public void setManagerApprovalStatus(ETeamStatus managerApprovalStatus) { this.managerApprovalStatus = managerApprovalStatus; }

    public ETeamStatus getDirectorApprovalStatus() { return this.directorApprovalStatus; }

    public void setDirectorApprovalStatus(ETeamStatus directorApprovalStatus) { this.directorApprovalStatus = directorApprovalStatus; }
}
