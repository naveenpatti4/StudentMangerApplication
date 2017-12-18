package com.school.ng2.server.model;

import javax.persistence.Entity;

@Entity
public class Student extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	String firstname;

	String lastname;

	Integer age;

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}
}
