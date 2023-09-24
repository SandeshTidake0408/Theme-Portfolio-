const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    fixedClass: "is-fixed",
});

function landingTextAnimation() {
    var tl = gsap.timeline();

    tl.from("#navbar", {
        y: "10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    }).to(".wrap_content", {
        y: 0,
        ease: Expo.easeInOut,
        delay: -1, //to appear fast after navbar
        duration: 2,
        stagger: 0.1, //for delay between to animated text
    });
}
landingTextAnimation();

var timeOut;
function circleFollowerSkews() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", (det) => {
        clearTimeout(timeOut);
        xscale = gsap.utils.clamp(0.9, 1.1, det.clientX - xprev);
        yscale = gsap.utils.clamp(0.9, 1.1, det.clientY - yprev);
        xprev = det.clientX;
        yprev = det.clientY;
        document.querySelector(
            "#curser_circle"
        ).style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(${xscale}, ${yscale})`;

        timeOut = setTimeout(() => {
            document.querySelector(
                "#curser_circle"
            ).style.transform = `translate(${det.clientX}px, ${det.clientY}px) scale(1,1)`;
        }, 100);
    });
}

circleFollowerSkews();

document.querySelectorAll(".content").forEach((element) => {
    var prevX = 0;
    var rotDiff = 0;
    element.addEventListener("mousemove", (dets) => {
        var curser = document.querySelector("#curser_circle");
        curser.querySelector("p").style.display = "block";
        curser.style.width = "80px";
        curser.style.height = "80px";
        var diff = dets.clientY - element.getBoundingClientRect().top; //this is calculated becuase we need to card in between respective div so, so we minus is top value from current value
        rotDiff = dets.clientX - prevX; // for rotate scale in x direction
        prevX = dets.clientX;

        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-18, 18, rotDiff),
        });
        gsap.to(element.querySelector("h1"), {
            opacity: 0.3,
            ease: Power3,
            x: 60,
        });
    });

    setTimeout(() => {
        element.addEventListener("mouseleave", (dets) => {
            var curser = document.querySelector("#curser_circle");
            curser.querySelector("p").style.display = "none";
            curser.style.width = "15px";
            curser.style.height = "15px";
            gsap.to(element.querySelector("img"), {
                opacity: 0,
                ease: Power3,
                delay: 0.1,
            });
            gsap.to(element.querySelector("h1"), {
                opacity: 0.7,
                ease: Power3,
                x: 0,
            });
        });
    }, 200);
});
