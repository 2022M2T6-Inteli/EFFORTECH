let idObra

let parametroURL = new URLSearchParams(window.location.search)
let obra_id = parametroURL.get('obra_id')



function redirecionaAdicionaServico() {
    window.location.href = 'inserirServico.html?obra_id=' + obra_id
}

// fetch('/obras')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         obras = data;
//         obras.map(function (obras) {

//         })
//     })


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

// function defineIdObra(obra_id) {
//     idObra = obra_id
//     window.location.href = "adminServicos.html"
// }

// console.log(idObra)

fetch('/servicosObraId?obra_id=' + obra_id)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        servicos = data;
        servicos.map(function (servicos) {
            document.getElementById("tabelaServicos").innerHTML +=
            `<tr>
                <th scope="row">${servicos.servico_id}</th>
                <td>${servicos.tipo}</td>
                <td>${servicos.descricao}</td>
                <td class="tdImgs"><a href = "editarServico.html?servico_id=${servicos.servico_id}"><img src="../imgs/editar.png" alt=""></td></a>
                <td class="tdImgs"><a href = "/atualizaStatusServico?status=Cancelado&servico_id=${servicos.servico_id}"><img id = "imgCancelar" src="../imgs/cancelar (1).png" alt=""></a></td>
                <td class="tdImgs"><a href = "/atualizaStatusServico?status=Concluido&servico_id=${servicos.servico_id}"><img id = "imgConcluir" src="../imgs/verifica (1).png" alt=""></a></td>
            </tr>`
        })
    })