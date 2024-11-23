export default function popup (status) {
    let btn_fechar_popup = document.querySelector(".btn_fechar_popup")
    let container_popup = document.querySelector(".container_popup")
    
    // função que fecha o popup quando o usuário clicar fora dele
    let fechar_popup = (e) => {
        let popup = document.querySelector(".popup")
        if (container_popup.style.display == "flex"){
            if (!popup.contains(e.target) && (!document.querySelector("#btn_mudar_foto").contains(e.target))) { // Verifica se o clique foi fora do popup e não foi feito no botão de mudar foto
                    container_popup.style.display = "none"
                    window.removeEventListener("click", fechar_popup); // Remove o evento de clique fora do popup
                }
            }
    }

    if (status == "abrir"){
        container_popup.style.display = "flex"
        window.addEventListener("click", fechar_popup)
    } else {
        container_popup.style.display = "none"
    }
    btn_fechar_popup.addEventListener("click", () => {
        container_popup.style.display = "none"
    })

}