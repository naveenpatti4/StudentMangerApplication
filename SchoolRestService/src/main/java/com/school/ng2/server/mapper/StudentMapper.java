package com.school.ng2.server.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

import com.school.ng2.server.dto.StudentDTO;
import com.school.ng2.server.model.Student;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface StudentMapper {

	public StudentDTO toDTO(Student student);

	public Student toEntity(StudentDTO student);

	public void mapToEntity(StudentDTO studentDTO, @MappingTarget Student student);

}
