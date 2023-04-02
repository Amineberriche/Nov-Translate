package com.NovTranslateappserver.payload;

import java.time.Instant;

public class UserSummary {
	private Long id;
    private String username;
    private String name;
    private String email;
    private Instant createdAt;

    public UserSummary(Long id, String username, String name, String email,Instant createdAt) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.setEmail(email);
        this.setCreatedAt(createdAt);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

}
