package com.school.ng2.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.ng2.server.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>, StudentRepositoryCustom {

}
