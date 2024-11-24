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

  export { visibilidadeSenha }