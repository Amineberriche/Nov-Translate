package com.NovTranslateappserver.service;

import java.io.IOException;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


import com.NovTranslateappserver.model.File;
import com.NovTranslateappserver.repository.FileRepository;


@Service
public class FileStorageService {
	@Autowired
	private FileRepository fileRepository;
	
	public File store(MultipartFile file) throws IOException {
	    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	    File File = new File(fileName, file.getContentType(), file.getBytes());
	    return fileRepository.save(File);
	  }
	  public File getFile(Long id) {
	    return fileRepository.findById(id).get();
	  }
	  
	  public Stream<File> getAllFiles() {
	    return fileRepository.findAll().stream();
	  }

}
