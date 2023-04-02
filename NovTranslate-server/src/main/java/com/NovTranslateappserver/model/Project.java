package com.NovTranslateappserver.model;


import com.NovTranslateappserver.model.audit.DateAudit;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;


@Entity
@Table(name = "projects")
public class Project extends DateAudit{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "project_name")
	private String projectName;
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "email_adress")
	private String emailAdress;
	
	@Column(name = "project_url")
	private String projectUrl;
	
	@Column(name = "langue_src")
	private String langueSrc;
	
	@Column(name = "langue_file")
	private String langueFile;
	
	@ManyToMany(fetch = FetchType.LAZY,
		      cascade = {
		          CascadeType.PERSIST,
		          CascadeType.MERGE
		      })
	@JoinTable(name = "project_langues",
    joinColumns = { @JoinColumn(name = "project_id") },
    inverseJoinColumns = { @JoinColumn(name = "langue_id") })
	private Set<Langue> langues = new HashSet<>();
	
	public Project() {
		
	}
	
	public Project(String projectName, String companyName, String emailAdress, String projectUrl, String langueSrc, String langueFile) {
		super();
		this.projectName = projectName;
		this.companyName = companyName;
		this.emailAdress = emailAdress;
		this.projectUrl = projectUrl;
		this.langueSrc = langueSrc;
		this.langueFile = langueFile;
	}

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getEmailAdress() {
		return emailAdress;
	}

	public void setEmailAdress(String emailAdress) {
		this.emailAdress = emailAdress;
	}

	public String getProjectUrl() {
		return projectUrl;
	}

	public void setProjectUrl(String projectUrl) {
		this.projectUrl = projectUrl;
	}

	public String getLangueSrc() {
		return langueSrc;
	}

	public void setLangueSrc(String langueSrc) {
		this.langueSrc = langueSrc;
	}
	
	public String getLangueFile() {
		return langueFile;
	}

	public void setLangueFile(String langueFile) {
		this.langueFile = langueFile;
	}
	

	public Set<Langue> getLangues() {
		return langues;
	}

	public void setLangues(Set<Langue> langues) {
		this.langues = langues;
	}
	
	public void addLangue(Langue langue) {
	    this.langues.add(langue);
	    langue.getProjects().add(this);
	  }
	
	
	public void removeLangue(long langueId) {
	    Langue langue = this.langues.stream().filter(t -> t.getId() == langueId).findFirst().orElse(null);
	    if (langue != null) {
	      this.langues.remove(langue);
	      langue.getProjects().remove(this);
	    }
	}
	
	

}