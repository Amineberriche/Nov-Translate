package com.NovTranslateappserver.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NovTranslateappserver.exception.ResourceNotFoundExceptionCrud;
import com.NovTranslateappserver.model.Project;
import com.NovTranslateappserver.repository.ProjectRepository;

@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")

public class ProjectController {
	
	@Autowired
    private ProjectRepository projectRepository;
	
	// get all projects
    @GetMapping("/projects")
    public List < Project > getAllProjects() {
        return projectRepository.findAll();
    }

    // create project rest api
    @PostMapping("/projects")
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    // get project by id rest api
    @GetMapping("/projects/{id}")
    public ResponseEntity < Project > getProjectById(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundExceptionCrud("Project not exist with id :" + id));
        return ResponseEntity.ok(project);
    }

    // update project rest api

    @PutMapping("/projects")
    public Project updateProject(@RequestBody Project project) {
    	return projectRepository.save(project);
    }

    // delete project rest api
    @DeleteMapping("/projects/{id}")
    public ResponseEntity <HttpStatus> deleteProjectById(@PathVariable Long id) {
        projectRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
	
}