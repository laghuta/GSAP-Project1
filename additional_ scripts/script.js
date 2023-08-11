const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



/**https://github.com/locomotivemtl/locomotive-scroll**/ 


function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#navbar_header", {
        y: -10,
        opacity: 0,
        duration:2,
        ease:Expo.easeInOut
    })
    .to(".bounding_elements", {
        y: 0,
        duration: 2,
        // delay: -1,
        ease: Expo.easeInOut,
        stagger: .2

    })
    .from("#navbar_footer", {
        y:-10,
        opacity:0,
        duration: 1,
        delay: -1,
        ease: Expo.easeInOut
    })

}

function circleMouseFollow(){
        window.addEventListener('mousemove', function(details){
        document.querySelector("#mouse_circle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
       })

    }
// teeno elements ko select karo, uske baat teeno par mouse move lagao
// jab mousemove ho to pata karo mouse kahan par hai x,y co-ord
//abb x, y ke badle image ko show karo , 
//uss image ko move karo, move karte waqt rotate karo
//abb jaise jaise mouse tex chale waise waise rotation bhi tez karo
 
document.querySelectorAll("#elem")
        .forEach(function(eleme){
            var rotate = 0;
            var diffrot = 0;
            eleme.addEventListener("mouseleave", function(details){
                gsap.to(eleme.querySelector("img"), {
                opacity:0,
                ease:Power3,
                duration:.5,
                
                });
            });
            eleme.addEventListener("mousemove", function(details){
               var diff = (details.clientY-eleme.getBoundingClientRect().top)
                diffrot = details.clientX - rotate;
                rotate = details.clientX;
                
                gsap.to(eleme.querySelector("img"), {
                     
                   opacity:1,
                   ease:Power3,
                   top: diff,
                   left: details.clientX,
                    rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
                });
                
               
                 
                
            });
        }) ;

circleMouseFollow();
firstPageAnim();



