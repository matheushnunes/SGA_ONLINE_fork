import { carregarConteudo} from "../../scripts/javaScript.js"
export default function produto () {
    console.log ("funcionar plis")
    let btn_add = document.querySelector("#btn_adicionar")
    btn_add.addEventListener("click",() => {
     carregarConteudo("produto/cadastro_produto/cadastro_produto.html",  document.querySelector(".principal"))
    } )

    let p_data_cadastro = document.querySelector("#data_cadastro")
    console.log(p_data_cadastro)
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1 // Mes comeca em 0
    if (dia <= 9) { // Se o dia for menor que 9 adiciona um 0 na frente
        dia = "0" + dia
    }
    if (mes <= 9) { // Se o mes for menor que 9 adiciona um 0 na frente
        mes = "0" + mes
    }
    p_data_cadastro.innerHTML = `${dia}/${mes}/${data.getFullYear()}`
}

