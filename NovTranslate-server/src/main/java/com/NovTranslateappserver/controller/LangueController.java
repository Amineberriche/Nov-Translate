package com.NovTranslateappserver.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.NovTranslateappserver.exception.ResourceNotFoundExceptionCrud;
import com.NovTranslateappserver.exception.mapping.ResourceNotFoundException;
import com.NovTranslateappserver.model.Langue;
import com.NovTranslateappserver.model.Project;
import com.NovTranslateappserver.repository.LangueRepository;
import com.NovTranslateappserver.repository.ProjectRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class LangueController {
	
	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private LangueRepository langueRepository;
	
	
	 @GetMapping("/langues")
	  public ResponseEntity<List<Langue>> getAllLangues() {
	    List<Langue> langues = new ArrayList<Langue>();

	    langueRepository.findAll().forEach(langues::add);

	    if (langues.isEmpty()) {
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

	    return new ResponseEntity<>(langues, HttpStatus.OK);
	  }
	 
	 
	  
	  @GetMapping("/projects/{projectId}/langues")
	  public ResponseEntity<List<Langue>> getAllLangueByProjectId(@PathVariable(value = "projectId") Long projectId) {
	    if (!projectRepository.existsById(projectId)) {
	      throw new ResourceNotFoundException("Not found Project with id = " + projectId);
	    }

	    List<Langue> langues = langueRepository.findLanguesByProjectsId(projectId);
	    return new ResponseEntity<>(langues, HttpStatus.OK);
	  }
	  
	// get langues by id rest api
	    @GetMapping("/langues/{id}")
	    public ResponseEntity < Langue > getgetLangueById(@PathVariable Long id) {
	    	Langue langue = langueRepository.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundExceptionCrud("Not found Langue with id :" + id));
	        return ResponseEntity.ok(langue);
	    }

	
//	  @GetMapping("/langues/{id}")
//	  public ResponseEntity<Langue> getLanguesById(@PathVariable(value = "id") Long id) {
//		  Langue langue = langueRepository.findById(id)
//	        .orElseThrow(() -> new ResourceNotFoundException("Not found Langue with id = " + id));
//
//	    return new ResponseEntity<>(langue, HttpStatus.OK);
//	  }
	  
	 @GetMapping("/langues/{langueId}/projects")
	 public ResponseEntity<List<Project>> getAllProjectsByLangueId(@PathVariable(value = "langueId") Long langueId) {
	    if (!langueRepository.existsById(langueId)) {
	      throw new ResourceNotFoundException("Not found Langue  with id = " + langueId);
	    }

	    List<Project> projects = projectRepository.findProjectsByLanguesId(langueId);
	    return new ResponseEntity<>(projects, HttpStatus.OK);
	 }

	@PostMapping("/projects/{projectId}/langues")
	  public ResponseEntity<Langue> addLangue(@PathVariable(value = "projectId") Long projectId, @RequestBody Langue langueRequest) {
		Langue langue = projectRepository.findById(projectId).map(project -> {
	    long langueId = langueRequest.getId();
	      
	     // langue is existed
	      if (langueId != 0L) {
	    	  Langue _langue = langueRepository.findById(langueId)
	            .orElseThrow(() -> new ResourceNotFoundException("Not found Langue with id = " + langueId));
	        project.addLangue(_langue);
	        projectRepository.save(project);
	        return _langue;
	  }
	   // add and create new langue
	      project.addLangue(langueRequest);
	      return langueRepository.save(langueRequest);
	    }).orElseThrow(() -> new ResourceNotFoundException("Not found Project with id = " + projectId));

	    return new ResponseEntity<>(langue, HttpStatus.CREATED);
	  }
	
	// update langue rest api
	
	
	@PutMapping("/langues")
    public Langue updateLangue(@RequestBody Langue langue) {
    	return langueRepository.save(langue);
    }
	
//	@PutMapping("/langues/{id}")
//	public ResponseEntity<Langue> updateLangue(@PathVariable("id") long id, @RequestBody Langue langueRequest) {
//		Langue langue = langueRepository.findById(id)
//	        .orElseThrow(() -> new ResourceNotFoundException("LangueId " + id + "not found"));
//
//		langue.setName(langueRequest.getName());
//
//	    return new ResponseEntity<>(langueRepository.save(langue), HttpStatus.OK);
//	}
	 
//	  @DeleteMapping("/projects/{projectId}/langues/{langueId}")
//	  public ResponseEntity<HttpStatus> deleteLangueFromProject(@PathVariable(value = "projectId") Long projectId, @PathVariable(value = "langueId") Long langueId) {
//	    Project project = projectRepository.findById(projectId)
//	        .orElseThrow(() -> new ResourceNotFoundException("Not found Project with id = " + projectId));
//	    
//	    project.removeLangue(langueId);
//	    projectRepository.save(project);
//	    
//	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//	  }
//	  
	  
	// delete langue rest api
	    @DeleteMapping("/langues/{id}")
	    public ResponseEntity <HttpStatus> deleteLangueById(@PathVariable Long id) {
	    	langueRepository.deleteById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
//	  @DeleteMapping("/langues/{id}")
//	  public ResponseEntity<HttpStatus> deleteLangue(@PathVariable("id") long id) {
//		  langueRepository.deleteById(id);
//
//	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//	  }
//	      

}
