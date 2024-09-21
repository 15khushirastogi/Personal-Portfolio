let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

showSlides();

let modeBtn=document.querySelector("#mode-icon");
let currMode="dark";
modeBtn.addEventListener("click", () => {
    if(currMode==="dark"){
        currMode="light";
        document.querySelector("body").style.backgroundColor="rgb(246, 235, 255)";
        document.querySelector("body").style.color="rgb(149, 98, 201)";
        //light mode
        document.querySelector("#about").style.backgroundColor="rgb(209, 185, 233) ";
        document.querySelector("#about").style.color="rgb(163, 14, 123) ";
        document.querySelector(".programming").style.color="rgb(163, 14, 123)";
        document.querySelector(".development").style.color="rgb(163, 14, 123)";
        document.querySelector(".heading").style.color="rgb(35, 1, 67)";
        document.querySelector(".school-heading").style.color="rgb(163, 14, 123)";
        document.querySelector(".left-school-introduction").style.color="rgb(163, 14, 123)";
        document.querySelector(".college-heading").style.color="rgb(163, 14, 123)   ";
        document.querySelector(".right-college-introduction").style.color="rgb(163, 14, 123)";
        document.querySelector("#projects").style.backgroundColor="rgb(209, 185, 233) ";
        document.querySelector(".project-content").style.color="rgb(163, 14, 123)";
        document.querySelector(".left-contact-heading").style.color="rgb(35, 1, 67)";
        document.querySelector(".right-contact-heading").style.color="rgb(35, 1, 67)";
        document.querySelector(".project-heading").style.color="rgb(35, 1, 67)";
        document.querySelector(".education-heading").style.color="rgb(35, 1, 67)";
        document.querySelector(".programming-heading").style.color="rgb(35, 1, 67)";
        document.querySelector(".development-heading").style.color="rgb(35, 1, 67)";
        document.querySelector("nav").style.color="bisque";
}
    else{
        currMode="dark";
        document.querySelector("body").style.backgroundColor="rgb(35, 1, 67)";
        document.querySelector("body").style.color="bisque";
        document.querySelector(".highlight").style.color="rgb(205, 164, 245)";
        document.querySelector("#about").style.backgroundColor="rgb(65, 30, 98)";
        document.querySelector(".programming").style.color="bisque";
        document.querySelector(".development").style.color="bisque";
        document.querySelector(".heading").style.color="rgb(205, 164, 245)";
        document.querySelector(".school-heading").style.color="rgb(205, 164, 245)";
        document.querySelector(".left-school-introduction").style.color="rgb(205, 164, 245)";
        document.querySelector(".college-heading").style.color="rgb(205, 164, 245)";
        document.querySelector(".right-college-introduction").style.color="rgb(149, 98, 201)";
        document.querySelector("#projects").style.backgroundColor="rgb(65, 30, 98)";
        document.querySelector(".project-content").style.color="rgb(205, 164, 245)";
        document.querySelector(".left-contact-heading").style.color="rgb(205, 164, 245)";
        document.querySelector(".right-contact-heading").style.color="rgb(205, 164, 245)";
        document.querySelector(".programming-heading").style.color="rgb(205, 164, 245)";
        document.querySelector(".development-heading").style.color="rgb(205, 164, 245)";
        
    }
    console.log(currMode);
});