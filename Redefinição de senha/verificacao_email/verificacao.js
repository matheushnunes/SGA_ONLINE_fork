function moveFocus(current, next, prev, type) {
    if (current.value.length === 1 && next) {
      next.focus();
    }
    if (type == "deleteContentBackward" && prev != null) {
        prev.focus()
    }
}

let digitos = document.querySelectorAll(".digit")
digitos.forEach(e => {
    e.addEventListener('input',(dig)=>{
        moveFocus(e, e.nextElementSibling,e.previousElementSibling, dig.inputType)
    })
})

let container_codigo = document.querySelector("#container_codigo")

container_codigo.addEventListener("click",()=>{
    let primeiro_digito = document.querySelector("#digit1")
    if (primeiro_digito.value == "") {
        primeiro_digito.focus()
    }
})