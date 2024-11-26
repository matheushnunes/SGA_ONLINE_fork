import { carregarConteudo} from "../../scripts/javaScript.js"
export default function produto () {
    console.log ("funcionar plis")
    let btn_add = document.querySelector("#btn_adicionar")
    btn_add.addEventListener("click",() => {
     carregarConteudo("produto/cadastro_produto/cadastro_produto.html",  document.querySelector(".principal"))
    } )
}

