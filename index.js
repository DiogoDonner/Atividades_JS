function AlertaClick() {
    const inputTarefa = document.getElementById("botao_tarefa");
    if (inputTarefa) {
        alert("Você clicou no botão");
    }
}

function consoleLog() {
    const inputTexto = document.getElementById("input_texto");
    const botaoValidar = document.getElementById("botao_validar");
    console.log(inputTexto.value);

    if (!inputTexto) {
        alert("Digite algo para aparecer no console");
    }
}

function alterarTexto() {
    const paragrafo = document.getElementById("paragrafo_")
    const textoOriginal = paragrafo.innerText;
    const textoAlterado = "'E a infelicidade é, por conseguinte, o resultado de uma vida contra a nossa natureza.'"
    consoleLog.apply(textoAlterado.innerText)
    document.getElementById("paragrafo_").innerText = textoAlterado;

    setTimeout(() => {
        document.getElementById("paragrafo_").innerText = textoOriginal;  // Revert to original text
        console.log("Texto revertido:", textoOriginal); // Log the original text
    }, 3000); // 3 seconds delay before reverting
}

function mudarCor(){
    const botaoCor = document.getElementById("botao_cor");
    const paragrafo = document.getElementById("paragrafo_")
    paragrafo.style.backgroundColor = "red";
    consoleLog("Funcionou")
}




function configEvento() {
    const botaoTarefa = document.getElementById("botao_tarefa");
    botaoTarefa.addEventListener("click", AlertaClick);

    const botaoValidar = document.getElementById("botao_validar");
    botaoValidar.addEventListener("click", consoleLog);

    const botaoFrase = document.getElementById("botao_frase");
    botaoFrase.addEventListener("click", alterarTexto);

    const botaoCor = document.getElementById("botao_cor");
    botaoCor.addEventListener("click",mudarCor);
}

window.addEventListener("load", configEvento);