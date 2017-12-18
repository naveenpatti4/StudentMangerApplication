package com.school.ng2.server.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.school.ng2.server.dto.StudentDTO;
import com.school.ng2.server.mapper.StudentMapper;
import com.school.ng2.server.model.Student;
import com.school.ng2.server.repository.StudentRepository;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	final static Logger LOG = Logger.getLogger(StudentServiceImpl.class);

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	StudentMapper studentMapper;

	@Override
	public Page<StudentDTO> findStudents(Pageable pageable) {
		return studentRepository.findAll(pageable).map(student -> studentMapper.toDTO(student));
	}

	@Override
	public StudentDTO getStudent(Long id) {
		Student student = studentRepository.getOne(id);
		if (student == null) {
			return null;
		} else {
			return studentMapper.toDTO(student);
		}
	}

	@Override
	public void updateStudent(StudentDTO studentDTO) {
		Student student = studentRepository.findOne(studentDTO.getId());
		studentMapper.mapToEntity(studentDTO, student);
	}

	@Override
	public void saveStudent(StudentDTO studentDTO) {
		Student student = studentMapper.toEntity(studentDTO);
		studentRepository.save(student);
	}

	@Override
	public void deleteStudent(Long id) {
		studentRepository.delete(id);
	}
}
