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
	var lname = document.getElementById("n2").value;
	var mail = document.getElementById("e").value;
	var phone = document.getElementById("ph").value;
	var password = document.getElementById("p").value;
	var adress= document.getElementById("a").value;

    if(fname == ""){
		alert('First Name is required !');
		check= false;
	}
	
    if(lname == ""){
		alert('Last Name is required !');
		check= false;
	}
	
	if(mail == ""){
		alert('E-mail is required !');
		check= false;
	}

	if(password == ""){
		alert('Password is required !');
		check= false;
	}
	
	if(adress == ""){
		alert('Address is required !');
		check= false;
	}
	if (phone == "") {

		alert('Phone is required !');
	}
    if (!fname.match(/^[A-Za-z ]+$/)){
		alert("only letters or space allowed in name field");
		check= false;
	}
    if (!lname.match(/^[A-Za-z ]+$/)){ 
		alert("only letters or space allowed in name field");
		check= false;
	}
    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check=false;
	}
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=^[A-Z])(?=.*[!@#$%^&*]).{8}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least and start with upper case letter");
		check=false;
	}
    if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check=false;
	}
    if (check==true) {
        alert("Thank you for being part of us!");
    }
    else{
        return check;
    }
}

