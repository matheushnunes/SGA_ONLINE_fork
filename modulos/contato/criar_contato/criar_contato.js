export default function criar_contato() {
    let links_nav = document.querySelectorAll(".link_nav")
    links_nav.forEach(link=>{
        link.addEventListener("click",(e)=>{
            let link_selecionado = document.querySelectorAll(".link_nav_selecionado")
            if (link_selecionado.length == 0) {
                e.target.classList.add("link_nav_selecionado")
            }
        })
    })
}