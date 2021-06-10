let btn1=document.querySelector('#btn-1');
let btn2=document.querySelector('#btn-2');
let openBtn = document.querySelector('.fa-bars');


btn1.addEventListener('click', () =>{
    document.getElementById("land").style.backgroundImage= "url('images/test1.jpeg')";
    // document.getElementById("land").style.transition=".4s";
    document.getElementById("bull1").style.backgroundColor= "#19c8fa";
    document.getElementById("bull1").style.borderColor= "#19c8fa";
    document.getElementById("bull2").style.borderColor= "white";
    document.getElementById("bull2").style.backgroundColor= "transparent";
    document.getElementById("bull3").style.borderColor= "white";
    document.getElementById("bull3").style.backgroundColor= "transparent";
    
});
btn2.addEventListener('click', () =>{
    document.getElementById("land").style.backgroundImage= "url('images/test2.jpeg')";
    // document.getElementById("land").style.transition=".4s";
    document.getElementById("bull1").style.backgroundColor= "transparent";
    document.getElementById("bull1").style.borderColor= "white";
    document.getElementById("bull2").style.borderColor= "white";
    document.getElementById("bull2").style.backgroundColor= "transparent";
    document.getElementById("bull3").style.backgroundColor= "#19c8fa";
    document.getElementById("bull3").style.borderColor= "#19c8fa";
});
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
    