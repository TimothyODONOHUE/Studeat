const boutons = document.querySelectorAll(".clickable")


boutons.forEach((bouton)=>{
    bouton.addEventListener("click", ()=>{
        bouton.classList.toggle("jaune")
})})

