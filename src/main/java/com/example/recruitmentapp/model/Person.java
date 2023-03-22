package com.example.recruitmentapp.model;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Person {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String address;
    private List<String> skills;
    private List<Education> educationList;

    public Person() {
        this.skills = new ArrayList<>();
        this.educationList = new ArrayList<>();
    }

    public Person(String name, String email, String phone, String address, List<String> skills, List<Education> educationList) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.skills = skills;
        this.educationList = educationList;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public List<Education> getEducationList() {
        return educationList;
    }

    public void setEducationList(List<Education> educationList) {
        this.educationList = educationList;
    }

    public void addEducation(Education education) {
        this.educationList.add(education);
    }

    public static class Education {
        private String name;
        private String grade;
        private LocalDate startDate;
        private LocalDate endDate;
        private String comment;

        public Education(String name, String grade, LocalDate startDate, LocalDate endDate, String comment) {
            this.name = name;
            this.grade = grade;
            this.startDate = startDate;
            this.endDate = endDate;
            this.comment = comment;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getGrade() {
            return grade;
        }

        public void setGrade(String grade) {
            this.grade = grade;
        }

        public LocalDate getStartDate() {
            return startDate;
        }

        public void setStartDate(LocalDate startDate) {
            this.startDate = startDate;
        }

        public LocalDate getEndDate() {
            return endDate;
        }

        public void setEndDate(LocalDate endDate) {
            this.endDate = endDate;
        }

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }
    }
}
