
window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if(window.scrollY > 50){

        header.style.background = 'rgba(10,10,10,0.95)';
        header.style.boxShadow = '0 0 20px rgba(46,139,87,0.5)';
    }

    else{

        header.style.background = 'rgba(255,255,255,0.05)';
        header.style.boxShadow = 'none';
    }
});




const cards = document.querySelectorAll(
'.feature-card, .course-card, .about-image, .about-content'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');
        }
    });

}, { threshold:0.2 });

cards.forEach((card) => {

    observer.observe(card);
});




const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Thank You! Your message has been sent successfully.');

    form.reset();
});




const text = 'Build Your Future With EduNova';

const typingText = document.createElement('h4');

typingText.style.color = '#7fffd4';
typingText.style.marginTop = '15px';

const heroContent = document.querySelector('.hero-content');

heroContent.appendChild(typingText);

let index = 0;

function typeEffect(){

    if(index < text.length){

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 70);
    }
}

window.onload = typeEffect;




const glow = document.createElement('div');

glow.classList.add('cursor-glow');

document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {

    glow.style.left = e.clientX + 'px';

    glow.style.top = e.clientY + 'px';
});