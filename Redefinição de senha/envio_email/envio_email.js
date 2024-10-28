let form = document.querySelector(".formulario")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(form.checkValidity())
    if (form.checkValidity()) {
        window.location.href = "../verificacao_email/verificacao.html"  
    }
})