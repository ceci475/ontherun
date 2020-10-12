//gsap.registerPlugin(ScrollTrigger);
//
//const divs= document.querySelectorAll("#sektion1 >div");
//
//gsap.from(divs, {
//    opacity:0,
//    translateY: 100,
//    duration:2,
//    stagger: 1,
//    ScrollTrigger: {
//        trigger: "#sektion1",
//        start: "top center",
//        end: "center center",
//        markers: true
//    }
//
//});
/*

gsap.registerPlugin(ScrollTrigger);

const divs= document.querySelectorAll("card-title");

card-title.forEach((card-title)=>{
    const divs=
          section.querySelectorAll("div");

gsap.from(card-title, {
    opacity:0,
    translateY: 100,
    duration:2,
    stagger: 1,
    ScrollTrigger: {
        trigger: "#sektion1",
        start: "top center",
        end: "center center",
        markers: true,
        scrub:true
    }
});
});

*/

gsap.registerPlugin(ScrollTrigger);

gsap.from("p", {
    opacity:0,
    translateY:100,
    duration:2,
    stagger: 1,
    ScrollTrigger: {
        trigger: "#sektion1",
        start: "top center",
        end: "center center",
        markers: true
    }
});

gsap.from("h3", {
    opacity:0,
    translateY:100,
    duration:2,
    stagger: 1,
    ScrollTrigger: {
        trigger: "#sektion1",
        start: "center 75%",
        end: "center 25%",
        markers: true
    }
});


//
//gsap.utils.toArray(".panel").forEach((panel, i) => {
//  ScrollTrigger.create({
//    trigger: panel,
//    start: "top top",
//    pin: true,
//    pinSpacing: false
//  });
//});
//
//
//ScrollTrigger.create({
//  snap: 1 / 4 // snap whole page to the closest section!
//});
//




