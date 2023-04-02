package com.NovTranslateappserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.NovTranslateappserver.model.Langue;

public interface LangueRepository extends JpaRepository<Langue, Long>{

	List<Langue> findLanguesByProjectsId(Long projectId);
	

}
