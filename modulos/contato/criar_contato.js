export default function criar_contato() {
    let links_nav = document.querySelectorAll(".link_nav")
    links_nav.forEach(e=>{
        console.log(e)
        e.addEventListener("click",(e)=>{
            e.target.classList.toggle("link_nav_selecionado")
        })
    })
}