package com.school.ng2.server.mapper;

import com.school.ng2.server.dto.StudentDTO;
import com.school.ng2.server.model.Student;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2017-12-18T12:11:54-0500",
    comments = "version: 1.0.0.Final, compiler: javac, environment: Java 9.0.1 (Oracle Corporation)"
)
@Component
public class StudentMapperImpl implements StudentMapper {

    @Override
    public StudentDTO toDTO(Student student) {
        if ( student == null ) {
            return null;
        }

        StudentDTO studentDTO = new StudentDTO();

        studentDTO.setId( student.getId() );
        studentDTO.setFirstname( student.getFirstname() );
        studentDTO.setLastname( student.getLastname() );
        studentDTO.setAge( student.getAge() );

        return studentDTO;
    }

    @Override
    public Student toEntity(StudentDTO student) {
        if ( student == null ) {
            return null;
        }

        Student student_ = new Student();

        student_.setId( student.getId() );
        student_.setFirstname( student.getFirstname() );
        student_.setLastname( student.getLastname() );
        student_.setAge( student.getAge() );

        return student_;
    }

    @Override
    public void mapToEntity(StudentDTO studentDTO, Student student) {
        if ( studentDTO == null ) {
            return;
        }

        student.setId( studentDTO.getId() );
        student.setFirstname( studentDTO.getFirstname() );
        student.setLastname( studentDTO.getLastname() );
        student.setAge( studentDTO.getAge() );
    }
}
