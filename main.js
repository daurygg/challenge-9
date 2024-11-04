

const form = document.getElementById('form');
const errorSpan = document.getElementById('error-span');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

if(data.email === '' || null || undefined || !validarCorreo(data.email)){    
    
    errorSpan.classList.remove("visible-error");
}
else {
    errorSpan.classList.add("visible-error");
}


});
function validarCorreo(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  