function addSkillInput() {
    const skillsFormGroup = document.getElementById('skills-form-group');
    const newInput = document.createElement('div');
    newInput.className = 'input-group mb-1';
    newInput.innerHTML = `<input type="text" class="form-control" name="skills[]" placeholder="Enter a skill" required>
    <button type="button" class="btn btn-sm btn-danger" onclick="removeSkillInput(this)">Remove Skill</button>
`;
    skillsFormGroup.insertBefore(newInput, skillsFormGroup.lastChild);
}

function removeSkillInput(button) {
    const inputGroup = button.parentElement;
    inputGroup.parentElement.removeChild(inputGroup);
}

function addEducationField() {
    console.log("Adding education field...");
    const educationFields = document.getElementById("education-fields");

    // Create a new education field using the Thymeleaf fragment
    const educationFieldTemplate = document.createElement("template");
    educationFieldTemplate.innerHTML = `
    <div th:replace="fragments/education-fields :: education-fields"></div>
  `;
    const educationField = educationFieldTemplate.content.firstChild;

    // Add the education field to the form
    educationFields.appendChild(educationField);
}
