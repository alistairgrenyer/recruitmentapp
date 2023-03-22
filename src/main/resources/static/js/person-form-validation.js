// Validate form on submit
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var form = document.getElementById('person-form');
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const skillsInputs = document.getElementsByName('skills[]');
    const educationNameInputs = document.getElementsByName('education_name[]');
    const educationGradeInputs = document.getElementsByName('education_grade[]');

    let isValid = true;
    if (nameInput.value === '') {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
    }

    if (emailInput.value === '') {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
    }

    if (phoneInput.value === '') {
        phoneInput.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneInput.classList.remove('is-invalid');
    }

    if (addressInput.value === '') {
        addressInput.classList.add('is-invalid');
        isValid = false;
    } else {
        addressInput.classList.remove('is-invalid');
    }

    const numSkills = skillsInputs.length;
    let numValidSkills = 0;
    for (let i = 0; i < numSkills; i++) {
        const skillInput = skillsInputs[i];
        if (skillInput.value !== '') {
            numValidSkills++;
            skillInput.classList.remove('is-invalid');
        } else {
            skillInput.classList.add('is-invalid');
        }
    }
    if (numValidSkills === 0) {
        isValid = false;
    }

    const numEducations = educationNameInputs.length;
    for (let i = 0; i < numEducations; i++) {
        const educationNameInput = educationNameInputs[i];
        const educationGradeInput = educationGradeInputs[i];
        const educationTypeInput = document.getElementsByName('education_type[]')[i];
        const educationStartDateInput = document.getElementsByName('education_start_date[]')[i];
        const educationEndDateInput = document.getElementsByName('education_end_date[]')[i];

        if (educationNameInput.value !== '') {
            if (educationGradeInput.value === '') {
                educationGradeInput.classList.add('is-invalid');
                isValid = false;
            } else {
                educationGradeInput.classList.remove('is-invalid');
            }
            if (educationTypeInput.value === '') {
                educationTypeInput.classList.add('is-invalid');
                isValid = false;
            } else {
                educationTypeInput.classList.remove('is-invalid');
            }
            if (educationStartDateInput.value === '') {
                educationStartDateInput.classList.add('is-invalid');
                isValid = false;
            } else {
                const startDate = new Date(educationStartDateInput.value);
                if (isNaN(startDate.getTime())) {
                    educationStartDateInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    educationStartDateInput.classList.remove('is-invalid');
                }
            }
            if (educationEndDateInput.value === '') {
                educationEndDateInput.classList.add('is-invalid');
                isValid = false;
            } else {
                const endDate = new Date(educationEndDateInput.value);
                if (isNaN(endDate.getTime())) {
                    educationEndDateInput.classList.add('is-invalid');
                    isValid = false;
                } else {
                    educationEndDateInput.classList.remove('is-invalid');
                }
            }
        }
    }

    const experienceRoleInputs = document.getElementsByName('experience_role[]');
    const experienceGradeInputs = document.getElementsByName('experience_grade[]');
    const experienceStartDateInputs = document.getElementsByName('experience_start_date[]');
    const experienceEndDateInputs = document.getElementsByName('experience_end_date[]');
    for (let i = 0; i < experienceRoleInputs.length; i++) {
        const experienceRoleInput = experienceRoleInputs[i];
        const experienceGradeInput = experienceGradeInputs[i];
        const experienceStartDateInput = experienceStartDateInputs[i];
        const experienceEndDateInput = experienceEndDateInputs[i];

        if (experienceRoleInput.value !== '') {
            if (experienceGradeInput.value === '') {
                experienceGradeInput.classList.add('is-invalid');
                isValid = false;
            } else {
                experienceGradeInput.classList.remove('is-invalid');
            }
            if (experienceStartDateInput.value === '') {
                experienceStartDateInput.classList.add('is-invalid');
                isValid = false;
            } else {
                experienceStartDateInput.classList.remove('is-invalid');
            }
            if (experienceEndDateInput.value === '') {
                experienceEndDateInput.classList.add('is-invalid');
                isValid = false;
            } else {
                experienceEndDateInput.classList.remove('is-invalid');
            }
        }
    }
    return isValid;
}