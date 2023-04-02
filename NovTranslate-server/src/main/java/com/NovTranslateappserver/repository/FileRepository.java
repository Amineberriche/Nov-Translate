package com.NovTranslateappserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.NovTranslateappserver.model.File;

public interface FileRepository extends JpaRepository<File, Long> {

}
