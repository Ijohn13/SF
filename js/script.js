//========= ANIMATIONS - start ================================

//===========animation navbar - start =============
const navigation = document.querySelector("#navbar");
const logo = document.querySelector(".logoNone");

window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        navigation.classList.add('animeNavbar');
        logo.classList.remove('animeLogo');
    } else {
        navigation.classList.remove('animeNavbar');
        logo.classList.add('animeLogo');
    }
})
//===========animation navbar - start =============

//===========index.html - start =============
ScrollReveal({ distance: '300px' });
ScrollReveal({ distance: '700px' });
ScrollReveal().reveal('#navbarNavAltMarkup', { origin: 'right' });
ScrollReveal().reveal('#nameEntreprise', {
    delay: 700,
    distance: '100px',
    opacity: 0
})
ScrollReveal().reveal('#illustrationFormation', {
    delay: 1000,
    distance: '100px',
    opacity: 0
})
ScrollReveal().reveal('#paratopLeft', { origin: 'left' });
ScrollReveal().reveal('#parabottomRight', { origin: 'right'});
ScrollReveal().reveal('.card', { 
    delay: 1200,
    rotate: {
        x: 20,
        z: 20
    }
}, {delay: 1000});
ScrollReveal().reveal('#prixFormations', { 
    delay: 1200,
    rotate: {
        x: 20,
        z: 20
    }
}, {delay: 1000});
ScrollReveal().reveal('#containerQualiopi', { scale: 0.85 });
ScrollReveal().reveal('#descriptionQualiopi', { delay: 700 });
ScrollReveal().reveal('#solutionFormationQualiopi', { delay: 700 });
ScrollReveal().reveal('#containerHandicapLogo', { delay: 700 });
ScrollReveal().reveal('#containerChoiceForamtion', { delay: 700 });
ScrollReveal().reveal('#containerForms', {
    distance: '100px',
    opacity: 0,
    delay: 700
});
ScrollReveal().reveal('#containerCounters', {afterReveal: showCounters});
//================= index.html - end =========

//================= presentation.html - start =================
ScrollReveal().reveal('#container-presentation', { origin: 'left'});
ScrollReveal().reveal('.para-presentation', { origin: 'right'});
ScrollReveal().reveal('#title-presentation', { origin: 'bottom'});
ScrollReveal().reveal('.para1', { origin: 'top', delay: 2000});
ScrollReveal().reveal('.para2', { origin: 'bottom', delay: 2000});
//================= presentation.html - end =================

//================= nosformations.html - start =================
ScrollReveal().reveal('#container-formation-para', { origin: 'left', distance: '700px', delay: 1000});
ScrollReveal().reveal('#container-formation-imgworld', { scale: 0.85, delay: 800});
ScrollReveal().reveal('#objectifs-title', { origin: 'top' });
ScrollReveal().reveal('#objectifs-para', { origin: 'bottom' });
ScrollReveal().reveal('#container-mockup-image', {opacity: 0.2, delay: 1000});
ScrollReveal().reveal('#container-mockup-para', { origin: 'right', delay: 1000});
/* ScrollReveal().reveal('#container-responsable-img', { 
    origin: 'left', 
    distance: '700px', 
    delay: 1000});
ScrollReveal().reveal('#container-responsable-para', { 
    origin: 'right', 
    distance: '700px', 
    delay: 1000}); */
/* ScrollReveal().reveal('#select-formation-title', { 
    origin: 'left', 
    distance: '700px', 
    delay: 1000});
ScrollReveal().reveal('.sf-para1', { 
    origin: 'right', 
    distance: '700px', 
    delay: 1000});
ScrollReveal().reveal('.sf-para2', { 
    origin: 'bottom', 
    distance: '500px', 
    delay: 1000}); */
/* ScrollReveal().reveal('.container-select-formation', { 
    origin: 'bottom', 
    distance: '500px', 
    delay: 1000}); */
ScrollReveal().reveal('#container-objectif', {
    rotate: {
        x: 20,
        z: 20
    }
});
//================= nosformations.html - end =================

//================= contact.html - start =================
ScrollReveal().reveal('.containerFormsContact', {opacity: 0.2, delay: 1000});
//================= contact.html - start =================

//========= ANIMATIONS - end ================================

//===== START - COUNTER =============================

let n = 97; //Nombre final du compteur
let n2 = 96;
let cpt = 0; //Initialisation du compteur
let duration = 70
let node = document.getElementById("counter1");
let node2 = document.getElementById("counter2");
let containerCounters = document.getElementById("containerCounters");

function countdown() {
    node.innerHTML = ++cpt + " %";
    if (cpt < n) {
        setTimeout(countdown, duration);
    }
}

function countdown2() {
    node2.innerHTML = ++cpt + " %";
    if (cpt < n2) {
        setTimeout(countdown2, duration);
    }
}

function showCounters() {
        countdown();
        countdown2();
}

//============ END - COUNTER =============================

//========= CLEAR INPUT AFTER SEND EMAIL =========
const btn = document.getElementById('btnForm');

btn.addEventListener("click", function handleClick(event){
    event.preventDefault();

    const inputs = document.querySelectorAll("input", "textarea");

    inputs.forEach(input => {
        input.value = '';
    });
});