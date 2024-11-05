

const form = document.getElementById('form');
const errorSpan = document.getElementById('error-span');
const errorform = document.getElementById("email");

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

if(data.email || !validarCorreo(data.email)){    
    
    errorSpan.classList.add("visible-error");
    errorform.classList.add("isError");
}
else {
    errorSpan.classList.remove("visible-error");
    errorform.classList.remove("isError");
}


});
function validarCorreo(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  