let idObra

let parametroURL = new URLSearchParams(window.location.search)
let obra_id = parametroURL.get('obra_id')

let statusFiltro


function getStatusServico() {
    const select = document.getElementById('filtroStatus');
    const statusServico = select.options[select.selectedIndex].text;
    statusFiltro = statusServico
    console.log(statusFiltro)
    document.getElementById("tabelaServicos").innerHTML = ''
    
    // window.location.href = '/frontend/homeAdmin.html'
    // fetch('/servicosObraId?obra_id=' + obra_id)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         servicos = data;
    //         servicos.map(function (servicos) {
    //             document.getElementById("tabelaServicos").innerHTML +=
    //             `<tr>
    //                 <th scope="row">${servicos.servico_id}</th>
    //                 <td>${servicos.tipo}</td>
    //                 <td>${servicos.descricao}</td>
    //                 <td class="tdImgs"><a href = "editarServico.html?servico_id=${servicos.servico_id}"><img src="../imgs/editar.png" alt=""></td></a>
    //                 <td class="tdImgs"><a href = "/atualizaStatusServico?status=Cancelado&servico_id=${servicos.servico_id}"><img id = "imgCancelar" src="../imgs/cancelar (1).png" alt=""></a></td>
    //                 <td class="tdImgs"><a href = "/atualizaStatusServico?status=Concluido&servico_id=${servicos.servico_id}"><img id = "imgConcluir" src="../imgs/verifica (1).png" alt=""></a></td>
    //             </tr>`
    //         })
    //     })



    fetch(`/servicosStatus?statusServico=${statusFiltro}&obra_id=${obra_id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            servicos = data;
            let saidaModal = '';
            servicos.map(function (servicos) {
                console.log(servicos.servico_id)
                if(statusFiltro == 'Em andamento'){
                    document.getElementById("tabelaServicos").innerHTML +=
                    `<tr>
                    <th scope="row">${servicos.servico_id}</th>
                    <td>${servicos.tipo}</td>
                    <td>${servicos.descricao}</td>
                    <td class="tdImgs"><a href = "editarservico.html?servico_id=${servicos.servico_id}"><img src="../imgs/editar.png" alt=""></td></a>
                    <td class="tdImgs"><a href = "/atualizaStatusServico?status=Cancelado&servico_id=${servicos.servico_id}"><img id = "imgCancelar" src="../imgs/cancelar (1).png" alt=""></a></td>
                    <td class="tdImgs"><a href="#" data-bs-toggle="modal" data-bs-target="#modal${servicos.servico_id}"><img id = "imgConcluir" src="../imgs/verifica (1).png" alt=""></a></td>
                    </tr>`

                    saidaModal += '<div class="modal" id="modal' + `${servicos.servico_id}` + '" tab-index="-1" aria-labelledby="tituloModal' + `${servicos.servico_id}` + '" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="tituloModal' + `${servicos.servico_id}` + '">' + `${servicos.tipo}` + '</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><form id="insereFeedback" method="post" action="/insereFeedback">Nota:<input class="m-2" type="number" name="nota"><textarea name="comentario" rows="8" cols="48" placeholder="Digite seu comentário aqui"></textarea><input type="hidden" name="servico_id" value="' + `${servicos.servico_id}` + '">ID:<input type="number" class="m-2" name="usuario_id"></form></div><div class="modal-footer"><button type="submit" form="insereFeedback" class="btn btn-primary">Enviar</button></div></div></div></div>'
                    document.getElementById("entradaModal").innerHTML = saidaModal
                }
                else if (statusFiltro == 'Cancelado') {
                    document.getElementById("Cancelar").text = 'Reativar'
                    document.getElementById("tabelaServicos").innerHTML +=
                    `<tr>
                    <th scope="row">${servicos.servico_id}</th>
                    <td>${servicos.nome}</td>
                    <td>${servicos.endereco}</td>
                    <td class="tdImgs"><a href = "editarservico.html?servico_id=${servicos.servico_id}"><img src="../imgs/editar.png" alt=""></td></a>
                    <td class="tdImgs"><a href = "/atualizaStatusservico?status=Em andamento&servico_id=${servicos.servico_id}"><img id = "imgAtivar" src="../imgs/contrato.png" alt=""></a></td>
                    <td class="tdImgs"><a href = "/atualizaStatusservico?status=Concluido&servico_id=${servicos.servico_id}"><img id = "imgConcluir" src="../imgs/verifica (1).png" alt=""></a></td>
                    </tr>`
                }
                else {
                    document.getElementById("Concluir").text = 'Reativar'
                    document.getElementById("tabelaServicos").innerHTML +=
                    `<tr>
                    <th scope="row">${servicos.servico_id}</th>
                    <td>${servicos.nome}</td>
                    <td>${servicos.endereco}</td>
                    <td class="tdImgs"><a href = "editarservico.html?servico_id=${servicos.servico_id}"><img src="../imgs/editar.png" alt=""></td></a>
                    <td class="tdImgs"><a href = "/atualizaStatusservico?status=Cancelado&servico_id=${servicos.servico_id}"><img id = "imgCancelar" src="../imgs/cancelar (1).png" alt=""></a></td>
                    <td class="tdImgs"><a href = "/atualizaStatusservico?status=Em andamento&servico_id=${servicos.servico_id}"><img id = "imgAtivar" src="../imgs/contrato.png" alt=""></a></td>
                    </tr>`

                }
            })
            
        
            
        })
    
}

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
