package com.NovTranslateappserver.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExceptionCrud extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	//private static final long serialVersionUID = -687991492884005033L;
	
    public ResourceNotFoundExceptionCrud(String message) {
        super(message);
    }

}
