/* pega o elemento do DOM que contém a classe .container */
const container = document.querySelector(".container"),
    photo = document.getElementById("photo")


container.addEventListener("animationend", (event) => { /* ouve o evento "animationend" (fim de uma animação)  */
    if (event.animationName === "fade") { /* verifica se a animação é "fade" */

        photo.style.animation = "fade 500ms 500ms backwards"


        container.classList.add("shake"); /* insere a animação "shake", ao fim da animação "fade" */

    }
})