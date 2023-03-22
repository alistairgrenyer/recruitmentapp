package com.example.recruitmentapp.repository;

import com.example.recruitmentapp.model.Person;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface PersonRepository extends Neo4jRepository<Person, Long> {

}
