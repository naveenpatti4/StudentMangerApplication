package com.school.ng2.server.model;

import static com.mysema.query.types.PathMetadataFactory.*;

import com.mysema.query.types.path.*;

import com.mysema.query.types.PathMetadata;
import javax.annotation.Generated;
import com.mysema.query.types.Path;


/**
 * QStudent is a Querydsl query type for Student
 */
@Generated("com.mysema.query.codegen.EntitySerializer")
public class QStudent extends EntityPathBase<Student> {

    private static final long serialVersionUID = 1463992045L;

    public static final QStudent student = new QStudent("student");

    public final QAbstractEntity _super = new QAbstractEntity(this);

    public final NumberPath<Integer> age = createNumber("age", Integer.class);

    public final StringPath firstname = createString("firstname");

    //inherited
    public final NumberPath<Long> id = _super.id;

    public final StringPath lastname = createString("lastname");

    //inherited
    public final NumberPath<Integer> version = _super.version;

    public QStudent(String variable) {
        super(Student.class, forVariable(variable));
    }

    public QStudent(Path<? extends Student> path) {
        super(path.getType(), path.getMetadata());
    }

    public QStudent(PathMetadata<?> metadata) {
        super(Student.class, metadata);
    }

}

