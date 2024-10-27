let campo = document.querySelector("#codigo")
campo.addEventListener('input',()=>{
    if (campo.value.length > 6) {
        campo.value = campo.value.slice(0, 6)
    } 
   
    if (campo.value.length == 6 ) {
        window.location.href = "../nova_senha/nova_senha.html"
    }
})