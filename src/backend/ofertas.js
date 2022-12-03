// Pega o id da obra via url
let idObra = +window.location.search.replace('?', '');
// Declaração de variávies
let urlObras = '/obras';
let urlServicos = '/servicos';
let todasAsObras;
let todosOsServicos;
let obraDesejada;
let servicosDesejados = [];
let divServicos = document.getElementById("mainServicos")

// Pega todas as obras do banco de dados
fetch(urlObras)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        todasAsObras = data;
        // Itera por todas as obras
        todasAsObras.map(function(todasAsObras){
            // Compara o id das obras com o id desejado para encontrar a obra certa
            if (todasAsObras.obra_id === idObra){
                obraDesejada = todasAsObras;
            }
        })

        // Substitui conteúdos da página pelos conteúdos das obra

        document.getElementById("nomeObra").innerHTML = obraDesejada.nome;

        document.getElementById("localizacaoObra").innerHTML = obraDesejada.cidade + ', ' + obraDesejada.estado + ' - ' + obraDesejada.endereco;

        document.getElementById("descricaoObra").innerHTML = obraDesejada.descricao;
    })

// Puxa todos os serviços do banco de dados
fetch(urlServicos)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let saida = ''
        todosOsServicos = data;
        // Itera por todos os serviços
        todosOsServicos.map(function(todosOsServicos){
            // Se o serviço tem o obra_id igual ao id da obra desejada, adiciona ele a saída
            if (todosOsServicos.obra_id === idObra){
                saida += '<div class="col-12"><p class="tituloServico">' + `${todosOsServicos.tipo}` + ':</p><p class="descricaoServico">' + `${todosOsServicos.descricao}` + '</p><br><button class="btn">CANDIDATAR-SE</button></div>'
            }
        })
        // Manda os serviços para o html
        mainServicos.innerHTML = saida;
    })