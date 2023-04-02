//package com.NovTranslateappserver.repository;
//
//import java.util.List;
//
//import javax.transaction.Transactional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.NovTranslateappserver.model.Parameter;
//
//public interface ParameterRepository extends JpaRepository<Parameter, Long>{
//	List<Parameter> findByFileId(Long postId);
//	  
//	@Transactional
//	void deleteByFileId(long fileId);
//
//}
