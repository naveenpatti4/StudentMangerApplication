package com.school.ng2.server.dto;

import java.util.Date;

public class StudentDTO extends AbstractDTO {

    String firstname;

    String lastname;

    Integer age;

    Date dateOfBirth;

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

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

	@Override
	public String toString() {
		return "StudentDTO [firstname=" + firstname + ", lastname=" + lastname + ", age=" + age + ", dateOfBirth="
				+ dateOfBirth + "]";
	}
    
    
}
