const tailleM = document.querySelector(".tailleM")
const tailleL = document.querySelector(".tailleL")
const tailleXL = document.querySelector(".tailleXL")


tailleM.addEventListener("click", ()=>{

    if(!tailleM.classList.contains("jaune")){
            tailleL.classList.remove("jaune")
            tailleXL.classList.remove("jaune")
            tailleM.classList.add("jaune")
    }
})

tailleL.addEventListener("click", ()=>{

    if(!tailleL.classList.contains("jaune")){
            tailleM.classList.remove("jaune")
            tailleXL.classList.remove("jaune")
            tailleL.classList.add("jaune")
    }
})

tailleXL.addEventListener("click", ()=>{

    if(!tailleXL.classList.contains("jaune")){
            tailleL.classList.remove("jaune")
            tailleM.classList.remove("jaune")
            tailleXL.classList.add("jaune")
    }
})

const viandesteak = document.querySelector(".viandesteak")
const viandenuggets = document.querySelector(".viandenuggets")
const viandekebab = document.querySelector(".viandekebab")


viandesteak.addEventListener("click", ()=>{

    if(!viandesteak.classList.contains("jaune")){
            viandenuggets.classList.remove("jaune")
            viandekebab.classList.remove("jaune")
            viandesteak.classList.add("jaune")
    }
})

viandenuggets.addEventListener("click", ()=>{

    if(!viandenuggets.classList.contains("jaune")){
            viandesteak.classList.remove("jaune")
            viandekebab.classList.remove("jaune")
            viandenuggets.classList.add("jaune")
    }
})

viandekebab.addEventListener("click", ()=>{

    if(!viandekebab.classList.contains("jaune")){
            viandesteak.classList.remove("jaune")
            viandenuggets.classList.remove("jaune")
            viandekebab.classList.add("jaune")
    }
})

