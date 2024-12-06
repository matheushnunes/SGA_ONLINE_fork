import { carregarConteudo } from "../../scripts/javaScript.js"
import { dataAtual } from "../../scripts/funcionalidades.js"
export default function produto () {
    let btn_add = document.querySelector("#btn_adicionar")
    btn_add.addEventListener("click",() => {
     carregarConteudo("produto/cadastro_produto/cadastro_produto.html",  document.querySelector(".principal"))
     let intervalo = setInterval(() => { //verifica se o modulo foi carregado
        if (document.querySelector(".modulo")) {
            dataAtual()
            clearInterval(intervalo)
        }
     }, 100);
    })
}

