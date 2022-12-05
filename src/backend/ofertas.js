let id_obra = +window.location.search.replace('?', '');
let urlObras = '/obras';
let urlServicos = '/servicos';
let todasAsObras;
let todosOsServicos;
let obraDesejada;
let servicosDesejados = [];
let divServicos = document.getElementById("mainServicos")

fetch(urlObras)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        todasAsObras = data;
        todasAsObras.map(function(todasAsObras){
            if (todasAsObras.obra_id === id_obra){
                obraDesejada = todasAsObras;
            }
        })

        document.getElementById("nomeObra").innerHTML = obraDesejada.nome;

        document.getElementById("localizacaoObra").innerHTML = obraDesejada.cidade + ', ' + obraDesejada.estado + ' - ' + obraDesejada.endereco;

        document.getElementById("descricaoObra").innerHTML = obraDesejada.descricao;
    })

fetch(urlServicos)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let saida = ''
        todosOsServicos = data;
        todosOsServicos.map(function(todosOsServicos){
            if (todosOsServicos.obra_id === id_obra){
                saida += '<div class="col-12"><p class="tituloServico">' + `${todosOsServicos.tipo}` + ':</p><p class="descricaoServico">' + `${todosOsServicos.descricao}` + '</p><br><button class="btn">CANDIDATAR-SE</button></div>'
            }
        })
        mainServicos.innerHTML = saida;
    })