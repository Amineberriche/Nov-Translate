//package com.NovTranslateappserver.model;
//
//import javax.persistence.*;
//import org.hibernate.annotations.OnDelete;
//import org.hibernate.annotations.OnDeleteAction;
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//@Entity
//@Table(name = "parameters")
//public class Parameter {
//	  @Id
//	  @GeneratedValue(strategy = GenerationType.IDENTITY)
//	  private Long id;
//	  @Column(name = "cle")
//	  private String cle;
//	  @Column(name = "valeur")
//	  private String valeur;
//	  
//	  public String getCle() {
//		return cle;
//	}
//	
//	@ManyToOne(fetch = FetchType.LAZY, optional = false)
//	  @JoinColumn(name = "file_id", nullable = false)
//	  @OnDelete(action = OnDeleteAction.CASCADE)
//	  @JsonIgnore
//	  private File file;
//	  
//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
//	public void setCle(String cle) {
//		this.cle = cle;
//	}
//	public String getValeur() {
//		return valeur;
//	}
//	public void setValeur(String valeur) {
//		this.valeur = valeur;
//	}
//	public File getFile() {
//		return file;
//	}
//	public void setFile(File file) {
//		this.file = file;
//	}
//	
//
//}
