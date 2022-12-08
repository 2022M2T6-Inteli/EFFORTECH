function redirecionaAdicionaObra() {
    window.location.href = 'inserir.html'
}

let nObras = 4

fetch('/cookies')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        cookies = data;
        console.log(cookies)
        if (cookies === "deslogado"){
            window.location.href = 'login.html';
        }
        let cookieSplit = cookies.split('=');
        id = +cookieSplit[1]
        console.log(id)
    })

fetch('/obras')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        obras = data;
        obras.map(function (obras) {
            document.getElementById("tabela").innerHTML +=
            `<tr>
                <th scope="row">${obras.obra_id}</th>
                <td>${obras.nome}</td>
                <td>${obras.endereco}</td>
                <td class="tdImgs"><a href = "adminServicos.html?obra_id=${obras.obra_id}" id = "servicos"><img src="../imgs/servico.png" alt=""></a></td>
                <td class="tdImgs"><img src="../imgs/editar.png" alt=""></td>
                <td class="tdImgs"><img id = "imgConcluir" src="../imgs/verifica (1).png" alt=""></td>
            </tr>`
        })
    })


































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