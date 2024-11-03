import { btnMenuLateral } from "../../scripts/javaScript.js"
export default function contato () {
    let input_pesquisa = document.querySelector(".input_pesquisa")
    let select_coluna = document.querySelector("#select_coluna")
    let container_select_coluna = document.querySelector(".container_campo_select")
    
    $('.campo_select').on('select2:select', function (e) {
        input_pesquisa.placeholder = "Pesquisar por " + e.params.data.text
    })
    $(document).ready(function() {
        $('.campo_select').select2({
            placeholder: 'Selecione a coluna',
            width: '200px',
            minimumResultsForSearch: Infinity,
        }
        );
    });

    function fecharMenu(){
        let widthTabela = document.querySelector(".tabela").offsetWidth
        if (widthTabela <= 480){
          let nav = document.querySelector("#menu_lateral")
          if (!nav.classList.contains("mini"))
            btnMenuLateral()
          document.querySelector("#tabela_codigo").innerHTML = "Cod"
        } 
      }
      fecharMenu()
      
      window.addEventListener('resize',(e)=>{
        fecharMenu()
      })
}
