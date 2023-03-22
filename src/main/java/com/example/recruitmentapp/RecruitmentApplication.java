package com.example.recruitmentapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@EnableNeo4jRepositories("com.example.recruitmentapp.repository")
@ComponentScan(basePackages = {"com.example.recruitmentapp.controller"})
public class RecruitmentApplication {

    public static void main(String[] args) {
        SpringApplication.run(RecruitmentApplication.class, args);
    }

    @GetMapping("/")
    public String showHome() {
        return "index";
    }
}
