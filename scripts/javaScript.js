// Modulos da tela principal:
import dashBorad from "../modulos/dashboard/dashboard";
console.log("sla")
function carregarConteudo(url) {
  console.log(dashBorad)
  let principal = document.querySelector(".principal")
  // Limpa o conteúdo atual antes de carregar o novo
  principal.innerHTML = "<p>Carregando...</p>";
  url = "../modulos/"+url
  // Carrega o conteúdo do arquivo HTML usando fetch
  fetch(url)
      .then(response => {
          if (!response.ok) throw new Error('Erro ao carregar o conteúdo.');
          return response.text();
      })
      .then(html => {
          principal.innerHTML = html;
      })
      .catch(error => {
          principal.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
          console.error(error);
      });
}

// Configurações menu lateral:

// Função trocar visibilidade do menu comforme for clicado
function displayMenu(id){
    if(id && id != "btn") {
      let menu = id
      let menus = document.querySelectorAll(".dropdown") // Pega todos os menus dropdown da página
      if (menu.style.display == "none") { // Altera a visibilidade do menu clicado
          menu.style.display = "block"
      } else {
          menu.style.display = "none"
      }
      menus.forEach(e=>{
        if (e.id != menu.id || id == "btn") { 
          e.previousElementSibling.classList.remove("modulo_selecionado") // Deixa todos os outros modulos que não foi o clicado sem a classe "modulo_selecionado"
        }
        if (e.style.display == "block" && e.id != menu.id) {
          e.style.display = "none"
        }
      }) // Deixa todos os outros menus que não foi o clicado com display none
    } else { // Se o módulo clicado for um botão
      let menus = document.querySelectorAll(".dropdown") // Pega todos os menus dropdown da página
      menus.forEach(e =>{
        e.style.display = "none" // Some com todos os menus drop-down 
      })
    }
}

// Função que modifica a visibilidade e o estilo dos itens do menu lateral 
function minimizarMenu(status){
    let mini = document.querySelectorAll(".btn, .btn_menu, .item_menu, #container_btn_fechar, #container_logo_busca, #menu_lateral, .span_modulo, .seta_cima_baixo, .graficos, .principal") // Seleciona todos os elementos necessários 
    mini.forEach(e => e.classList.toggle("mini")) // Adiciona ou retira a classe "mini" nos elementos
    if (status == "fechar"){
        document.querySelectorAll(".dropdown").forEach(e => e.style.display = "none") // Deixa invisível os itens do menu dropdown
    }
}

// Função que modifica o botão de abrir e fechar o menu lateral
function btnMenuLateral(target){
    let icone_aba = document.querySelector("#icone_aba")
    if (icone_aba.classList[0] == "aba_fechar") { // Se o menu estiver maximizado 
        icone_aba.src = "../imagens/icone_abrir_aba.png"
        icone_aba.className = "aba_abrir"
        icone_aba.alt = "Icone_abrir_aba_menu"
        minimizarMenu("fechar")
    } else { // Se o menu estiver minimizado 
        icone_aba.src = "../imagens/icone_fechar_aba.png"
        icone_aba.className = "aba_fechar"
        icone_aba.alt = "Icone_fechar_aba_menu"
        minimizarMenu("abrir")
        if(target == "btn_lateral") { // Se o botão apertado for o botão lateral:
            // Se tiver um modulo selecionado e não for um botão é chamada a função para abrir as opções do modulo 
            let modulo_selecionado = document.querySelector(".modulo_selecionado")
            if(modulo_selecionado != null && modulo_selecionado.classList[0] == "btn_menu"){
                displayMenu(modulo_selecionado.nextElementSibling)
            }
        }
    }
    
}

let btns_menu = document.querySelectorAll(".btn_menu") // Seleciona todos os botões dos modulos
btns_menu.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        let modulo = e.currentTarget // Pega o modulo que foi clicado
        let btnMini = modulo.classList.contains("mini") // Verifica se o botão tem a classe "mini"
        let btn = (modulo.classList[0] == 'btn') // Verifica se a opção selecionada é um botão que não tem um menu dropdown
        let widthBody = document.body.offsetWidth // Pega o tamanho do body
        btns_menu.forEach(el=>{
            if(el.id == modulo.id){ // Se o elemento for igual o id do modulo clicado
                if(!btnMini) { // Se for um botão maximizado
                  el.classList.toggle("modulo_selecionado") // Adicionando a classe selecionado no modulo que foi clicado
                  if(!btn){ // Se não for um botão
                    displayMenu(el.nextElementSibling) // Manda como parametro para função o proximo irmão do elemento selecionado
                  } else {
                    displayMenu("btn")
                  }
                } else { // Se for um botão minimizado
                  if(!btn){ // Se não for um botão
                    modulo.classList.add("modulo_selecionado") // Somente adiciona a classe
                    btnMenuLateral()
                    displayMenu(modulo.nextElementSibling)
                  }else {
                    modulo.classList.toggle("modulo_selecionado") // Se for um botão adiciona e remove a classe
                    console.log(modulo)
                  }
                }
            } else {
                el.classList.remove("modulo_selecionado") // Retirando a classe selecionado de todos os outros modulos que não foram clicados 
            }

            if (widthBody <= 480 && btn && !btnMini) {
              btnMenuLateral()
            }
        })
        
        document.querySelectorAll(".item_dropdown").forEach(e=>{ // Quando for selecionado um módulo é retirado a marcação de todos os itens do menu
            e.classList.remove("item_menu_selecionado")
        }) 
    })
})

let itemMenu = document.querySelectorAll(".item_dropdown")
itemMenu.forEach((e)=>{
  e.addEventListener("click",e=>{
    let widthBody = document.body.offsetWidth // Pega o tamanho do body
    if (widthBody <= 480){
      btnMenuLateral()
    }
  })
})


// Configurações de estilo dos itens do menu dropdown: 
let itens_dropdown = document.querySelectorAll(".item_dropdown") // Pega todos os itens de todos os módulos
itens_dropdown.forEach(e=>{
    e.addEventListener("click",e=>{ // Adiciona a função de clicar em todos
        itens_dropdown.forEach(i=>{
            if (i.id == e.currentTarget.id){
                e.currentTarget.classList.toggle("item_menu_selecionado") // Adiciona ou tira a classe "item_menu_selecionado" somente do item clicado
            } else {
                i.classList.remove("item_menu_selecionado") // Tira a classe de todos os outros items
            }
        })
    })
})

let btn_fechar_menu = document.querySelector("#btn_fechar_menu") // Botão fechar e abrir o menu lateral
let click_btn_menu = false
btn_fechar_menu.addEventListener('click',()=>{
  btnMenuLateral('btn_lateral')
  click_btn_menu = true
  
})

document.addEventListener("click",(e)=>{
  let menuLateral = document.querySelector("#menu_lateral")
  let widthBody = document.body.offsetWidth // Pega o tamanho do body
  if (widthBody <= 480 && !menuLateral.classList.contains("mini") && !menuLateral.contains(e.target)) { // Clicar fora do menu com o body com menos de 480px fecha ele 
    btnMenuLateral() 
  }
})


// Menu Usuário:

let btnUsuario = document.querySelector("#usuario")
let menu_usuario = document.querySelector("#menu_usuario")
let usuario_seta = document.querySelector("#usuario_seta")
btnUsuario.addEventListener("click",()=>{ 
    if (menu_usuario.style.display == "none"){
        menu_usuario.style.display = "flex"
        usuario_seta.style.transform = "rotate(180deg)"
        usuario_seta.style.transition = ".1s"
    } else {
        menu_usuario.style.display = "none"
        usuario_seta.style.transform = "rotate(0deg)"
        usuario_seta.style.transition = ".1s"
    }
})

// Fechar o menu quando clicar fora do menu:
document.addEventListener("click",(e)=>{
    if(!btnUsuario.contains(e.target) && !menu_usuario.contains(e.target)){
      menu_usuario.style.display = "none"
      usuario_seta.style.transform = "rotate(0deg)"
      usuario_seta.style.transition = ".1s"
    }
})

