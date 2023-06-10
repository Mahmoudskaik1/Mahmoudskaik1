var maue = document.querySelector(".menu")
maue.onclick = function(){
    let show = document.querySelector(".menu-shew")
    show.classList.toggle("yas")
    show.onclick = function() {
        show.classList.remove("yas")
    }
}