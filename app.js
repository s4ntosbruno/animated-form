function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            //check form validation
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.6s ease";
            }
            //get rid o animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log('caracteres insuficientes');
        error("lightsalmon")
    } else {
        error("lightpink");
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error("lightpink");
        return true;
    } else {
        error("lightsalmon");
    }
}

function error(color) {
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

animatedForm();