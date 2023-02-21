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

const saucefromagereoui = document.querySelector(".saucefromagereoui")
const saucefromagerenon = document.querySelector(".saucefromagerenon")


saucefromagereoui.addEventListener("click", ()=>{

    if(!saucefromagereoui.classList.contains("jaune")){
            saucefromagerenon.classList.remove("jaune")
            saucefromagereoui.classList.add("jaune")
    }
})

saucefromagerenon.addEventListener("click", ()=>{

    if(!saucefromagerenon.classList.contains("jaune")){
            saucefromagereoui.classList.remove("jaune")
            saucefromagerenon.classList.add("jaune")
    }
})

const algerienne = document.querySelector(".algerienne")
const blanche = document.querySelector(".blanche")


algerienne.addEventListener("click", ()=>{

    if(!algerienne.classList.contains("jaune")){
            blanche.classList.remove("jaune")
            algerienne.classList.add("jaune")
    }
})

blanche.addEventListener("click", ()=>{

    if(!blanche.classList.contains("jaune")){
            algerienne.classList.remove("jaune")
            blanche.classList.add("jaune")
    }
})

