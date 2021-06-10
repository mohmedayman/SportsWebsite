let openBtn = document.querySelector('.fa-bars');

openBtn.addEventListener('click', ()=>{
    document.getElementById("nav").style.display="flex";
    document.getElementById("nav").style.flexDirection="column";
    document.getElementById("nav").style.position="absolute";
    document.getElementById("nav").style.top="100%";
    document.getElementById("nav").style.left="0%";
    document.getElementById("nav").style.width="100%";
    document.getElementById("nav").style.backgroundColor="rgb(0 0 0 / 50%)";
    document.getElementById("nav1").style.width="100%";
    document.getElementById("nav2").style.width="100%";
    document.getElementById("nav3").style.width="100%";
    document.getElementById("nav4").style.width="100%";
    document.getElementById("nav5").style.width="100%";
    });