

const form = document.getElementById('form');
const errorSpan = document.getElementById('error-span');
const errorform = document.getElementById("email");
const messages = document.getElementById("messages");
const singup = document.getElementById("singup");
const messageBtn = document.getElementById("messageBtn");


form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    

if(!data.email || !validarCorreo(data.email)){   

    errorSpan.classList.remove("visible-error");
    errorform.classList.add("isError");
}
else {
    errorSpan.classList.add("visible-error");
    errorform.classList.remove("isError");
    messages.classList.remove("visible");
    singup.classList.add("visible");

    const mail = document.getElementById("mail");
    mail.textContent = data.email;
    
    e.target.reset();    
}

});

messageBtn.addEventListener("click", (e)=>{

    messages.classList.add("visible");
    singup.classList.remove("visible");      
});

const validarCorreo = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  