function visibilidadeSenha(senha, img) {
    if (senha.type === 'password') {
        senha.type = 'text';
        img.src = "../../imagens/visibility_off.png"
    } else {
        senha.type = 'password';
        img.src = "../../imagens/visibility_on.png"
    }
}  

let nova = false
function confirmacao() {
    function htmlValid() {
        if (confirmacao_senha.value !== nova_senha.value) {
            validador.innerHTML = "As senhas não correspondem"
            validador.style.color = "rgb(100, 0, 0)"
            senhasOk = false
            btn_redefinir.style.cursor = "not-allowed"
        } else {
            validador.innerHTML = "As senhas correspondem"
            validador.style.color = "rgb(0, 100, 0)"
            senhasOk = true
            btn_redefinir.style.cursor = "pointer"
        }
    }
    
    if (confirmacao_senha.value.length >= nova_senha.value.length){
        nova = true
        htmlValid()
    }
    if (nova) {
        htmlValid()
    }
    if (confirmacao_senha.value.length == 0 && nova_senha.value.length == 0) {
        validador.innerHTML = ""
        senhasOk = false
    }
}

let nova_senha = document.querySelector("#senha")
let confirmacao_senha = document.querySelector("#confirmacao_senha")
let view_senha = document.querySelector("#view_senha")
let view_confirmacao = document.querySelector("#view_confirmacao")
let validador = document.querySelector("#validador_senhas")
let btn_redefinir = document.querySelector("#btn_redefinir")
let senhasOk = false

view_senha.addEventListener("click", ()=> {
    visibilidadeSenha(nova_senha, view_senha)
})
view_confirmacao.addEventListener("click", ()=> {
    visibilidadeSenha(confirmacao_senha, view_confirmacao)
})

confirmacao_senha.addEventListener("input",()=> {
    confirmacao()
})
nova_senha.addEventListener("input",()=> {
    confirmacao()
})

btn_redefinir.addEventListener("click", ()=> {
    if (senhasOk) {
        alert("Senha redefinida com sucesso!\nClique em 'ok' e faça seu login com a nova senha.")
        window.location.href = "../../SGA online-login/index.html"
    } else {
        
    }
})
