let campo = document.querySelector("#codigo")
let alerta = document.querySelector("#feed_codigo")
campo.addEventListener('input',()=>{
    if (campo.value.length > 6) {
        campo.value = campo.value.slice(0, 6)
    } 
   
    if (campo.value.length == 6){
        if (campo.value == 123456 ) {
            window.location.href = "../nova_senha/nova_senha.html"
        } else {
            alerta.innerHTML = "Código inválido"
        }
    } else {
        alerta.innerHTML = ""
    }
})