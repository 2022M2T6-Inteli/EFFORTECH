var n_obras = 2;
var perfil;

const id_usuario = 2;


fetch('/usuario')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        perfis = data;
        perfis.map(function (perfis) {
            if(perfis.usuario_id == id_usuario) {
                perfil = perfis
            }
        })
        document.getElementById("nome_do_empreiteiro").innerHTML = `<h2>${perfil.nomeFantasia}</h2>`
        document.getElementById("nome_da_empreiteira").innerHTML = `<p>${perfil.nomeFantasia}</p>`
        document.getElementById("nota").innerHTML = `<p>${perfil.usuario_id}</p>`
        document.getElementById("CPF").innerHTML = `<p>${perfil.cnpj}</p>`
        document.getElementById("RG").innerHTML = `<p>${perfil.cnpj}</p>`

    })


function adiciona_card(){

    
    if( n_obras % 2 == 0){
        document.getElementById("catalogo_obras").innerHTML += '<div class="row linha_obras" id="' + n_obras/2 + '"><div class="card_servicos offset-1 col-4"><div class="row"><img class="img_obra" src="../imgs/obra-mrv-campo-grande-ms-881485.jpg" alt=""></div><div class="container informacoes_card"><div class="row"><h3>' + `${obra.nome}` + '</h3></div><div class="row informacoes_baixo"><div class="container"><div class="row"><div class="col-6 feedback"><a href=""><img class="icon_feedback" src="../imgs/feedback-do-cliente.png" alt="feedback"></a></div><!-- <div class="offset-1 col-1"><hr id="vertical"></div> --><div class="col-6 nota_servico"><p>' + `${perfil.nota}` + '</p></div></div></div></div></div></div></div>';
        n_obras = n_obras + 1;
        console.log(n_obras);

    }

    else {
        document.getElementById((n_obras-1)/2).innerHTML += '<div class="card_servicos offset-2 col-4"><div class="row"><img class="img_obra" src="../imgs/obra-mrv-campo-grande-ms-881485.jpg" alt=""></div><div class="container informacoes_card"><div class="row"><h3>Edifício Alexandre Halfed</h3></div><div class="row informacoes_baixo"><div class="container"><div class="row"><div class="col-6 feedback"><a href=""><img class="icon_feedback" src="../imgs/feedback-do-cliente.png" alt="feedback"></a></div><!-- <div class="offset-1 col-1"><hr id="vertical"></div> --><div class="col-6 nota_servico"><p>Nota: 10,00</p></div></div></div></div></div></div>';
        n_obras = n_obras + 1;

    };
}