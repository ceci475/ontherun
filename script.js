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

