let openBtn = document.querySelector('.fa-bars');
window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("contactForm");
	contactForm.onsubmit= validate;
}
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
  
    function validate(){
        var check = true;
        var fname = document.getElementById("n").value;
        var mail = document.getElementById("m").value;
        var message= document.getElementById("me").value;
    
        if(fname == ""){
            alert('Name is required !');
            check= false;
        }
        
        if(mail == ""){
            alert('E-mail is required !');
            check= false;
        }
    
        if(message == ""){
            alert('Message is required !');
            check= false;
        }
        if (!fname.match(/^[A-Za-z ]+$/)){
            alert("only letters or space allowed in name field");
            check= false;
        }
        if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
            alert("Email is Not Valid");
            check=false;
        }
        if (check==true) {
            alert("Got it! Thank you.");
        }
        else{
            return check;
        }
    }
    
        