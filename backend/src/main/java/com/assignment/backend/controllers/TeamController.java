package com.assignment.backend.controllers;

import com.assignment.backend.models.ETeamStatus;
import com.assignment.backend.models.Team;
import com.assignment.backend.payload.request.SetApprovalStatusRequest;
import com.assignment.backend.payload.response.JwtResponse;
import com.assignment.backend.payload.response.MessageResponse;
import com.assignment.backend.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    public TeamRepository teamRepository;

    @GetMapping("/all")
    @PreAuthorize("hasRole('MANAGER') or hasRole('DIRECTOR')")
    public List<Team> allTeams() {
        return teamRepository.findAll();
    }

    @PostMapping("/setManagerApprovalStatus")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> setManagerApprovalStatus(@RequestBody SetApprovalStatusRequest request) {
        Long teamId = request.getTeamId();
        ETeamStatus status = request.getStatus();

        if (!teamRepository.existsById(teamId)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: No team with id: " + teamId + " is found!"));
        } else {
            teamRepository.findById(teamId)
                    .map(team -> {
                        team.setManagerApprovalStatus(status);
                        teamRepository.save(team);
                        return team;
                    });

			return ResponseEntity.ok("Status Updated");
        }
    }

	@PostMapping("/setDirectorApprovalStatus")
	@PreAuthorize("hasRole('DIRECTOR')")
	public ResponseEntity<?> setDirectorApprovalStatus(@RequestBody SetApprovalStatusRequest request) {
        Long teamId = request.getTeamId();
        ETeamStatus status = request.getStatus();

		if (!teamRepository.existsById(teamId)) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: No team with id: " + teamId + " is found!"));
		} else {
			teamRepository.findById(teamId)
					.map(team -> {
						team.setDirectorApprovalStatus(status);
                        teamRepository.save(team);
						return team;
					});

			return ResponseEntity.ok("Status Updated");
		}
	}
}
