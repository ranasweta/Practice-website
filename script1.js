var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnim() {
    gsap.from("#nav",{
        y:30,
        opacity:0,
        duration:1,
        delay:1,
        stagger:2,

    });
    gsap.from("#heading",{
        y:30,
        opacity:0,
        duration:1,
        delay:2,
        stagger:1,

    });
}

function skewcircle() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
        document.querySelector("#mincir").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
        timeout = setTimeout(function () {
            document.querySelector("#mincir").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

function circlemousefollow() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#mincir").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circlemousefollow();
skewcircle();
firstpageAnim();