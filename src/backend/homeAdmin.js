function redirecionaAdicionaObra() {
    window.location.href = 'inserir.html'
}

let nObras = 4

function adicionaCard() {

    const linha = Math.floor(nObras/4)
    const id = "linhaObras" + linha 
    console.log(id)

    if(nObras % 4 != 0){
        document.getElementById("linhaObras1").innerHTML += `<div class="card_servicos offset-1 col-2"><div class="row"><img class="img_obra" src="../imgs/obra-mrv-campo-grande-ms-881485.jpg" alt=""></div><div class="container informacoes_card"><div class="row"><h3><strong>Alexandre Halfed</strong></h3></div><div class="row informacoes_baixo"><div class="container"><div class="row"><div class="col-6 feedback"><a href=""><img class="icon_feedback" src="../imgs/feedback-do-cliente.png" alt="feedback"></a></div><div class="col-6 nota_servico"><p>Nota: 10,00</p></div></div></div></div></div></div>`
        nObras += 1
    }
    else {
        document.getElementById("catalogoObras").innerHTML += `<div class="row linha_obras" id="linhaObras${(nObras/4)}"><div class="card_servicos offset-1 col-2"><div class="row"><img class="img_obra" src="../imgs/obra-mrv-campo-grande-ms-881485.jpg" alt=""></div><div class="container informacoes_card"><div class="row"><h3><strong>Alexandre Halfed</strong></h3></div><div class="row informacoes_baixo"><div class="container"><div class="row"><div class="col-6 feedback"><a href=""><img class="icon_feedback" src="../imgs/feedback-do-cliente.png" alt="feedback"></a></div><div class="col-6 nota_servico"><p>Nota: 10,00</p></div></div></div></div></div></div>`
        nObras += 1
    }
}