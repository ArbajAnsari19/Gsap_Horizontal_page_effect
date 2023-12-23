function time(){
    var a=0;
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML=a+"%"
        }
        else{
            a=100
            document.querySelector("#loader h1").innerHTML=a+"%"
        }
    },150)
}
const b = document.querySelector(".nav_menu");
const c = document.querySelector(".nav_main");

const toggleNavbar = () =>{
    c.classList.toggle("active");
}
b.addEventListener("click",()=>toggleNavbar());




var tl = gsap.timeline();


tl.to("#loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})
tl.to("#page1 h1",{
    transform:"translateX(-165%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})