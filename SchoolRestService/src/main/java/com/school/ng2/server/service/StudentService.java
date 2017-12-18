package com.school.ng2.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.school.ng2.server.dto.StudentDTO;

public interface StudentService {

	Page<StudentDTO> findStudents(Pageable pageable);

	StudentDTO getStudent(Long id);

	void updateStudent(StudentDTO studentDTO);

	void saveStudent(StudentDTO studentDTO);

	void deleteStudent(Long id);

}
