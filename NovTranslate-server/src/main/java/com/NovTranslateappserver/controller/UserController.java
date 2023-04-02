package com.NovTranslateappserver.controller;

import com.NovTranslateappserver.exception.ResourceNotFoundException;
import com.NovTranslateappserver.model.Project;
import com.NovTranslateappserver.model.User;
import com.NovTranslateappserver.payload.*;
import com.NovTranslateappserver.repository.UserRepository;
import com.NovTranslateappserver.security.UserPrincipal;
import com.NovTranslateappserver.security.CurrentUser;
import com.NovTranslateappserver.util.AppConstants;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
    private UserRepository userRepository;

	// get all projects
    @GetMapping("/users")
    public List < User > getAllUsers() {
        return userRepository.findAll();
    }

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getName(), currentUser.getEmail(),currentUser.getCreatedAt());
        return userSummary;
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/users/{username}")
    public UserProfile getUserProfile(@PathVariable(value = "username") String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));


        UserProfile userProfile = new UserProfile(user.getId(), user.getUsername(), user.getName(), user.getEmail(), user.getCreatedAt());

        return userProfile;
    }

    

}
