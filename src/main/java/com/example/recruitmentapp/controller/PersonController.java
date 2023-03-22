package com.example.recruitmentapp.controller;

import com.example.recruitmentapp.model.Person;
import com.example.recruitmentapp.repository.PersonRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/person-form")
public class PersonController {

    private final PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping
    public String showForm(Model model) {
        model.addAttribute("person", new Person());
        return "person-form";
    }

    @PostMapping
    public String submitForm(@ModelAttribute("person") Person person, Model model) {
        personRepository.save(person);
        model.addAttribute("message", "Person added successfully.");
        model.addAttribute("person", new Person());
        return "person-form";
    }
}
