let id_obra = +window.location.search.replace('?', '');
let urlServicos = '/servicos'
let todosOsServicos;
let servicosDesejados = [];
let divServicos = document.getElementById("mainServicos")

fetch(urlServicos)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let saida = ''
        todosOsServicos = data;
        todosOsServicos.map(function(todosOsServicos){
            if (todosOsServicos.obra_id === id_obra){
                saida += '<div class="tipo_servico"><p>' + `${todosOsServicos.tipo}` + ':</p><div class="descricao_pintura"><a>Lorem Ipsum Lorem Ipsum Lorem Ipsum </a></div><br><button class="btn">CANDIDATAR-SE</button></div><br><br>'
            }
        })
        mainServicos.innerHTML = saida;
    })