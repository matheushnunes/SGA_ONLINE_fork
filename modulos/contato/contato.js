// Função que minimiza o menu lateral:
import { btnMenuLateral, carregarConteudo } from "../../scripts/javaScript.js"
import criar_contato from "../contato/criar_contato/criar_contato.js"

export default function contato() {
    let input_pesquisa = document.querySelector(".input_pesquisa")

    /**
     * Função que fecha o menu lateral se a tela tiver menos de 480px de largura
     * e muda o nome da coluna de código na tabela
     */
    function fecharMenu() {
        let widthTabela = document.querySelector(".tabela").offsetWidth
        if (widthTabela <= 480) {
            if (!document.querySelector("#menu_lateral").classList.contains("mini"))
                btnMenuLateral()

            document.querySelector("#tabela_codigo").innerHTML = "Cod"
        } 
    }

    // Fecha o menu lateral se a tela tiver menos de 480px de largura
    fecharMenu()

    // Fecha o menu lateral se a tela tiver menos de 480px de largura no resize
    window.addEventListener('resize', (e) => {
        fecharMenu()
    })

    // Adiciona evento de mudança de seleção no select2
    $('.campo_select').on('select2:select', function (e) {
        input_pesquisa.placeholder = "Pesquisar por " + e.params.data.text
    })

    // Inicializa o select2
    $(document).ready(function () {
        $('.campo_select').select2({
            placeholder: 'Selecione a coluna',
            width: '140px',
            minimumResultsForSearch: Infinity,
        });
    });

    // Botão criar contato:

    let btn_criar_contato = document.querySelector("#btn_criar_contato")
    btn_criar_contato.addEventListener("click",()=>{
        carregarConteudo("contato/criar_contato/criar_contato.html")
        setTimeout(() => {
            criar_contato()
        }, 10);
    })
}
