package com.school.ng2.server.mvc;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.school.ng2.server.dto.StudentDTO;
import com.school.ng2.server.service.StudentService;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/student")
public class StudentController {

	final static Logger LOG = Logger.getLogger(StudentController.class);

	@Inject
	StudentService studentService;

	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<StudentDTO>> findAllStudent(Pageable pageable, HttpServletRequest req) {
		Page<StudentDTO> page = studentService.findStudents(pageable);
		return new ResponseEntity<>(page, HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<StudentDTO> getStudent(@PathVariable Long id, HttpServletRequest req) {
		StudentDTO student = studentService.getStudent(id);
		return new ResponseEntity<>(student, HttpStatus.OK);
	}

	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public String createStudent(@RequestBody StudentDTO studentDTO) {
		System.out.println("Student create " + studentDTO.toString());
		studentService.saveStudent(studentDTO);
		return "{'status:'success'}";
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public String updateStudent(@RequestBody StudentDTO studentDTO) {
		studentService.updateStudent(studentDTO);
		return "{'status:'success'}";
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteStudent(@PathVariable Long id) {
		studentService.deleteStudent(id);
	}
}
