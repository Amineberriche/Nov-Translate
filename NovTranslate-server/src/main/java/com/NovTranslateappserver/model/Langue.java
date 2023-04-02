package com.NovTranslateappserver.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "langues")
public class Langue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String name;
	
	@ManyToMany(fetch = FetchType.LAZY,
		      cascade = {
		          CascadeType.PERSIST,
		          CascadeType.MERGE
		      },
		      mappedBy = "langues")
	@JsonIgnore
	private Set<Project> projects = new HashSet<>();
	
	@ManyToMany(fetch = FetchType.LAZY,
		      cascade = {
		          CascadeType.PERSIST,
		          CascadeType.MERGE
		      })
	@JoinTable(name = "langue_file",
	joinColumns = { @JoinColumn(name = "langue_id") },
	inverseJoinColumns = { @JoinColumn(name = "file_id") })
	private Set<File> files = new HashSet<>();
	public Langue() {

	}
	  
	public long getId() {
	   return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
	   return name;
	}

	public void setName(String name) {
	   this.name = name;
	}
	
	public Set<Project> getProjects() {
		return projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}

	public Set<File> getFiles() {
		return files;
	}

	public void setFiles(Set<File> files) {
		this.files = files;
	}
	
	public void uploadFile(File file) {
	    this.files.add(file);
	    file.getLangues().add(this);
	}

	public Langue(long id, String name, Set<Project> projects, Set<File> files) {
		super();
		this.id = id;
		this.name = name;
		this.projects = projects;
		this.files = files;
	}
	

}
