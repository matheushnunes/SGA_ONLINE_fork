//Muda estilo do botão "sair" 
function alterarEstilo() {
    var link = document.getElementById("meuLink");
    link.style.color = "gray"; // Altera a cor
    link.style.textDecoration = "none"; // Remove o sublinhado
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
    let mini = document.querySelectorAll(".btn, .btn_menu, .item_menu, #container_btn_fechar, #container_logo_busca, #menu_lateral, .span_modulo, .seta_cima_baixo, .graficos") // Seleciona todos os elementos necessários 
    mini.forEach(e => e.classList.toggle("mini")) // Adiciona ou retira a classe "mini" nos elementos
    if (status == "fechar"){
        document.querySelectorAll(".dropdown").forEach(e => e.style.display = "none") // Deixa invisível os itens do menu dropdown
    }
}

// Função que modifica o botão de abrir e fechar o menu lateral
function btnMenuLateral(target){
    let icone_aba = document.querySelector("#icone_aba")
    if (icone_aba.classList[0] == "aba_fechar") { // Se o menu estiver maximizado 
        icone_aba.src = "imagens/icone_abrir_aba.png"
        icone_aba.className = "aba_abrir"
        icone_aba.alt = "Icone_abrir_aba_menu"
        minimizarMenu("fechar")
    } else { // Se o menu estiver minimizado 
        icone_aba.src = "imagens/icone_fechar_aba.png"
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
        menu_usuario.style.display = "block"
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

// DashBoard:

let cinza1 = "#F6F6F6";
let cinza2 = "#E8E8E8";
let azul = "#3964A8";
let azul1 = "#9CBBED50";
let azul_1 = "#E9F0FF";
let vermelho = 'rgba(255, 0, 0, 0.15)';

// Dados dos gráficos:
let dado_entrada = [4,12,15,8]
let dado_saida = [2,16,4,9]
let dado_diferenca = []
dado_entrada.forEach((e,i) => { // Entrada - Saída
  dado_diferenca.push(e - dado_saida[i])
}) 

// Gráfico Entrada de produtos:
let gfc_entrada
function criarGraficoEntrada(tipo, font) {
  const c_gfc_entrada= document.getElementById('grafico_entrada_produtos').getContext('2d');
  if (gfc_entrada) {
    gfc_entrada.destroy()
  }
  gfc_entrada= new Chart(c_gfc_entrada, {
    type: tipo, // Gráfico de linha (que pode ser usado para gráficos de área)
    data: {
      labels: ['2020', '2021', '2022', '2023'], // Anos no eixo X
      datasets: [{
        label: 'Entradas', // Legenda
        data: dado_entrada, // Valores no eixo Y
        fill: true, // Preencher a área abaixo da linha
        backgroundColor: azul1, // Cor de fundo (azul claro)
        borderColor: azul, // Cor da linha
        tension: 0.1 // Suavizar a curva da linha
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Ano', // Rótulo do eixo X
            font: {
              size: font
            }
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Entradas', // Rótulo do eixo Y
            font: {
              size: font
            }
          }
        },
      },
      plugins: {
        legend: {
          display: false // Ocultar a legenda
        }
      }
    }
  });
}
criarGraficoEntrada('line') // Cria o primeiro gráfico quando a página é carregada

// Gráfico Saída de produtos:
let gfc_saida
function criarGraficoSaida(tipo, font) {
  const c_gfc_saida = document.getElementById('grafico_saida_produtos').getContext('2d');
  if (gfc_saida) { // Se o gráfico ja exister ele é destruido para poder ser criado outro
    gfc_saida.destroy()
  }
  gfc_saida = new Chart(c_gfc_saida, {
    type: tipo, // Gráfico de linha (que pode ser usado para gráficos de área)
    data: {
      labels: ['2020', '2021', '2022', '2023'], // Anos no eixo X
      datasets: [{
        label: 'Saídas', // Legenda
        data: dado_saida, // Valores no eixo Y
        fill: true, // Preencher a área abaixo da linha
        backgroundColor: azul1, // Cor de fundo (azul claro)
        borderColor: azul, // Cor da linha
        tension: 0.1 // Suavizar a curva da linha
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Ano', // Rótulo do eixo X
            font: {
              size: font
            }
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Entradas', // Rótulo do eixo Y
            font: {
              size: font
            }
          }
        },
      },
      plugins: {
        legend: {
          display: false // Ocultar a legenda
        }
      }
    }
  });
}
criarGraficoSaida('line')

// Gráfico Diferença entre Entrada e Saída de produtos:
let gfc_diferenca
function criarGraficoDiferenca(tipo, font){
  const c_gfc_diferenca = document.getElementById('grafico_diferenca_produtos').getContext('2d');
  if (gfc_diferenca) {
    gfc_diferenca.destroy()
  }
  gfc_diferenca = new Chart(c_gfc_diferenca, {
    type: tipo,
    data: {
      labels: ['2020', '2021', '2022', '2023'], // Anos no eixo X
      datasets: [{
        label: 'Entradas - Saídas',
        data: dado_diferenca, // Valores no eixo Y
        fill: {
          target: {
            value: 0 // Define o valor de referência (eixo Y = 0)
          },
          above: '#e9f0ff73', // Preenchimento azul claro acima de 0
          below: vermelho // Preenchimento vermelho claro abaixo de 0
        },
        backgroundColor: function(context) {
          const value = context.dataset.data[context.dataIndex];
          // Se o valor é negativo, retorna vermelho, senão retorna azul
          return value < 0 ? vermelho : azul1;
        },
        borderColor: azul, // Cor da linha (azul)
        tension: 0.1 // Suaviza a curva da linha
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Ano',
            font: {
              size: font
            }
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Fluxo total',
            font: {
              size: font
            }
          }
        },
      },
      plugins: {
        legend: {
          display: false // Ocultar a legenda
        }
      }
    }
  });
}
criarGraficoDiferenca('line')
// Responsividade do gráfico:
const pai = document.querySelector('.filtro_grafico');
const filho = document.querySelectorAll('.filtro');

const observer = new ResizeObserver(entries => {
  entries.forEach(entry => {
    filho.forEach(e=>{
        if (entry.contentRect.width > 445) {
            e.style.justifyContent = 'center';
            e.style.width = "min-content"
        } else {
            e.style.width = "100%"
            e.style.justifyContent = 'space-between';
        }
    })
    
  });
});

observer.observe(pai);  

// Alterar gráficos e fechar menu quando o body for menor que 480px:
function atualizarGraficos(graficos, width) {
  graficos.forEach(grafico => { // Muda o tamanho da fonte dos gráficos
    grafico.options.scales.x.title.font.size = fontSize;
    grafico.options.scales.y.title.font.size = fontSize;
    grafico.update(); // Atualiza o gráfico com as alterações
  });

  if (width <= 300) { // Retira e adiciona o texto produto e ano dos gráficos
    graficos.forEach(e=>{
      e.options.scales.x.title.display = false
      e.options.scales.y.title.display = false
    })
  }
  else {
    graficos.forEach(e=>{
      e.options.scales.x.title.display = true
      e.options.scales.y.title.display = true
    })
  }
}

let fontSize = 16
function fecharMenu(){
  widthBody = document.body.offsetWidth
  if (widthBody <= 480){
    let nav = document.querySelector("#menu_lateral")
    fontSize = 12
    if (!nav.classList.contains("mini") && !click_btn_menu)
      btnMenuLateral()
  } else {
    click_btn_menu = false
    fontSize = 16
  }
  atualizarGraficos([gfc_entrada, gfc_saida, gfc_diferenca], widthBody); // Adicione todos os gráficos aqui
}
fecharMenu()

window.addEventListener('resize',(e)=>{
  fecharMenu()
})

// Alterar tipo do gráfico: 
let tipo_grafico_entrada = document.querySelector("#tipo_grafico_entrada")
let tipo_grafico_saida = document.querySelector("#tipo_grafico_saida")
let tipo_grafico_diferenca = document.querySelector("#tipo_grafico_diferenca")

tipo_grafico_entrada.addEventListener('change',()=>{
  criarGraficoEntrada(tipo_grafico_entrada.value, fontSize)
})
tipo_grafico_saida.addEventListener('change',()=>{
  criarGraficoSaida(tipo_grafico_saida.value, fontSize)
})
tipo_grafico_diferenca.addEventListener('change',()=>{
  criarGraficoDiferenca(tipo_grafico_diferenca.value, fontSize)
})
