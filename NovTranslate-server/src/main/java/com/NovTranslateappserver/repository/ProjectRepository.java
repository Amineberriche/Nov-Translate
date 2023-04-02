package com.NovTranslateappserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.NovTranslateappserver.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{
	List<Project> findProjectsByLanguesId(Long tagId);
}