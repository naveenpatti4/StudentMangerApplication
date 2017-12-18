package com.school.ng2.server.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.mysema.query.jpa.JPQLQuery;
import com.mysema.query.jpa.impl.JPAQuery;
import com.school.ng2.server.model.QStudent;

public class StudentRepositoryImpl implements StudentRepositoryCustom {

	@PersistenceContext
	private EntityManager em;

	@Override
	public int countCustom() {
		JPQLQuery query = new JPAQuery(em);
		return (int) query.from(QStudent.student).where(QStudent.student.id.isNotNull()).count();
	}

}
