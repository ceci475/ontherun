gsap.registerPlugin(ScrollTrigger);


const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const p = section.querySelectorAll("p, h3");

    gsap.from(p, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "center center",
/*            markers: true,*/
        },
    });
});


gsap.from(".poster", {
    opacity: 0,
    scale: .1,
    duration: 2,
    ease: "none",
    scrollTrigger: {
        trigger: "#event",
        start: "top center",
        end: "top top",
        scrub: true,
        /*   markers: true*/
    }
});


gsap.from(".mere", {
    x: 200,
    duration: 2,
    ease: "ease.out(1, 0.3)",
});





var rellax = new Rellax(".rellax", {
  center: true,
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

