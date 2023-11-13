
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks =  document.querySelectorAll('header nav a');


window.onscroll = () => {
    console.log(window.scrollY);
    if(window.scrollY>1100 || window.scrollY>2400){
        document.querySelector('#skills-content').style.display="block"
        document.querySelector('#prof-skills-box').style.display=""
    }else{
        document.querySelector('#skills-content').style.display="none"
        document.querySelector('#prof-skills-box').style.display="none"
    }

    



    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           // active navbar links
           navLinks.forEach(links => {
            links .classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


var typed = new Typed(".multiple-text",{
    strings: ["Full Stack Developer","Web Developer","Graphic Desinger"],
    typeSpeed:100,
    backSpeed :100,
    backDelay : 1000,
    loop:true
})

// circle skill

const circles =document.querySelectorAll('.cricle');

circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i<dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked');
    }

    // const pointsMarked= elem.querySelectorAll('.points');
    // for(let i =0 ; i<percent; i++){
    //     pointsMarked[i].classList.add('marked')
    // }
})

