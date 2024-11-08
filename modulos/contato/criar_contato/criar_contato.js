export default function criar_contato() {

    // Mudar de tela ao clicar no menu superior da tela de contato:
    
    let links_nav = document.querySelectorAll(".link_nav") // seleciona todos os links do menu superior
    links_nav.forEach(link=>{
        link.addEventListener("click",(e)=>{ // Adiciona o evento de clicar em todos os links 
            e.target.classList.add("link_nav_selecionado") // Adiciona a classe ao link clicado

            let links_selecionado = document.querySelectorAll(".link_nav_selecionado") // Seleciona todos os links selecionados
            links_selecionado.forEach(e=>{
                if (e.id != link.id){ // Se o link selecionado for diferente do link clicado
                    e.classList.remove("link_nav_selecionado") // Retira a classe
                } else { // Se o link selecionado for o link clicado
                    e.classList.add("link_nav_selecionado") // Adiciona a classe
                }
            })
        })
    })


    // Mudar o input de data de cadastro para o dia atual:

    let input_data_cadastro = document.querySelector("#data_cadastro")
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1 // Mes comeca em 0
    if (dia <= 9) { // Se o dia for menor que 9 adiciona um 0 na frente
        dia = "0" + dia
    }
    if (mes <= 9) { // Se o mes for menor que 9 adiciona um 0 na frente
        mes = "0" + mes
    }
    input_data_cadastro.value = `${data.getFullYear()}-${mes}-${dia}`
}