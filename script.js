    var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav",{
        Y:"-10",
        opacity:0,
        duration:2,
        ease:Expo.easeInOut,
    })
    .to(".boundelem",{
        Y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:0.2,
    })
    .from("#herofoot",{
        Y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    });

           
}


//jab mouse move ho to hum log skew kr paye(sikudna)aur max skew and min skew set krde
//jabb mouse chale tbb bchapta hona shuru ho and jab ruke tab firse normal ho jaye
function skewcircle() {
    // define default scale value
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
        circlemousefollow(xscale, yscale);
        timeout = setTimeout(function () {
            document.querySelector(
                "#mincir"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
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