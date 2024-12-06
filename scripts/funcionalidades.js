function visibilidadeSenha(senha, img) {
    if (senha.type === 'password') {
      senha.type = 'text';
      img.src = "../../imagens/visibility_off.png"
      img.id = "view_on"
    } else {
      senha.type = 'password';
      img.src = "../../imagens/visibility_on.png"
      img.id = "view_off"
    }
  }

  function dataAtual() {
    let p_data_cadastro = document.querySelector(".data_cadastro")
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

  export { visibilidadeSenha, dataAtual }