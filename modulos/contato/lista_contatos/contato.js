// Função que minimiza o menu lateral:
import { btnMenuLateral, carregarConteudo, fecharMenu } from "../../../scripts/javaScript.js"

export default function contato() {
    let input_pesquisa = document.querySelector(".input_pesquisa")
    /**
     * Função que fecha o menu lateral se a tela tiver menos de 480px de largura
     * e muda o nome da coluna de código na tabela
     */

    
    // Fecha o menu lateral se a tela tiver menos de 480px de largura no resize
    fecharMenu(document.querySelector(".tabela").offsetWidth,480)
    window.addEventListener('resize', (e) => {
        if (document.querySelector(".tabela") != null){
            fecharMenu(document.querySelector(".tabela").offsetWidth, 480)
        } 
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
        carregarConteudo("contato/cadastro_contato/criar_contato/criar_contato.html",document.querySelector(".principal"))
    })
}