let btn1=document.querySelector('#btn-1');
let btn2=document.querySelector('#btn-2');


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