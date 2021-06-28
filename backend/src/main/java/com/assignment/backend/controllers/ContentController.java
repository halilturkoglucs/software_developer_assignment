package com.assignment.backend.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/content")
public class ContentController {
	@GetMapping("/all")
	public String allAccess() {
		return "Welcome to the Home Page.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("isAuthenticated()")
	public String userAccess() {
		return "User Content returned from the backend.";
	}

	@GetMapping("/manager")
	@PreAuthorize("hasRole('MANAGER')")
	public String moderatorAccess() {
		return "Manager content returned from the backend.";
	}

	@GetMapping("/director")
	@PreAuthorize("hasRole('DIRECTOR')")
	public String adminAccess() {
		return "Director content returned from the backend.";
	}
}
