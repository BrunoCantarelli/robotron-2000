const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (event) => {
        manipulaDados(event.target.textContent, event.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    
    const peca = controle.querySelector(".controle-contador") // toda vez q clicar no controle ele vai buscar o controle contador de quem é

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1 // transforma o valor do peca em inteiro e add + 1 a cada click
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}