/* pega o elemento do DOM que contém a classe .container */
const container = document.querySelector(".container");


container.addEventListener("animationend", (event) => { /* ouve o evento "animationend" (fim de uma animação)  */
    if (event.animationName === "fade") { /* verifica se a animação é "fade" */
        container.classList.add("shake"); /* insere a animação "shake", ao fim da animação "fade" */
    }
})