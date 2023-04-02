package com.NovTranslateappserver.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.NovTranslateappserver.exception.ResourceNotFoundExceptionCrud;
import com.NovTranslateappserver.exception.ResponseFile;
import com.NovTranslateappserver.exception.ResponseMessage;
import com.NovTranslateappserver.exception.mapping.ResourceNotFoundException;
import com.NovTranslateappserver.model.File;
import com.NovTranslateappserver.model.Langue;
import com.NovTranslateappserver.model.Project;
import com.NovTranslateappserver.repository.FileRepository;
import com.NovTranslateappserver.repository.LangueRepository;
import com.NovTranslateappserver.service.FileStorageService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FileController {
	@Autowired
	private FileStorageService storageService;
	@Autowired
    private FileRepository fileRepository;
	@Autowired
    private LangueRepository langueRepository;
	
	// get file by id rest api
    @GetMapping("/file/{id}")
    public ResponseEntity < File > getFileById(@PathVariable Long id) {
        File file = fileRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundExceptionCrud("file not exist with id :" + id));
        return ResponseEntity.ok(file);
    }
    
    @PostMapping("/Langues/{langueId}/file")
	  public ResponseEntity<ResponseMessage> uploadFile(@PathVariable(value = "langueId") Long langueId, @RequestBody File fileRequest, @RequestParam("file") MultipartFile file) {
    	File filejson = (File) langueRepository.findById(langueId).map(langue -> {
    	long fileId = fileRequest.getId();
	    langue.uploadFile(fileRequest);
	    return fileRepository.save(fileRequest);
    	}).orElseThrow(() -> new ResourceNotFoundException("Not found langue with id = " + langueId));
    	String message = "";
	    try {
	      storageService.store(file);
	      message = "Uploaded the file successfully: " + file.getOriginalFilename();
	      return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
	    } catch (Exception e) {
	      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
	    }

	  }
	@PostMapping("/upload")
	  public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable(value = "langueId") Long langueId) {
	    String message = "";
	    System.out.println(langueId);
	
	    
	    try {
	   storageService.store(file);
	      message = "Uploaded the file successfully: " + file.getOriginalFilename();
	      
	        
	      return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
	    } catch (Exception e) {
	      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
	    }
	  }
//	@GetMapping("/files")
//	  public ResponseEntity<List<ResponseFile>> getListFiles() {
//	    List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
//	      String fileDownloadUri = ServletUriComponentsBuilder
//	          .fromCurrentContextPath()
//	          .path("/files/")
//	          .path(dbFile.getId())
//	          .toUriString();
//	      return new ResponseFile(
//	          dbFile.getFileName(),
//	          fileDownloadUri,
//	          dbFile.getFileType(),
//	          dbFile.getData().length);
//	    }).collect(Collectors.toList());
//	    return ResponseEntity.status(HttpStatus.OK).body(files);
//	  }
	  @GetMapping("/files/{id}")
	  public ResponseEntity<byte[]> getFile(@PathVariable Long id) {
	    File file = storageService.getFile(id);
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFileName() + "\"")
	        .body(file.getData());
	  }
	
}
