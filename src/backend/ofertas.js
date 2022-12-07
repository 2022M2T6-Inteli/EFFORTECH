// Pega o id da obra via url
let idObra = +window.location.search.replace('?', '');
// Declaração de variávies
let urlObras = '/obras';
let urlServicos = '/servicos';
let todasAsObras;
let todosOsServicos;
let obraDesejada;
let servicosDesejados = [];
let divServicos = document.getElementById("mainServicos");
let divModal = document.getElementById("mainModal");

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
        let saida = '';
        let saidaModal = '';
        todosOsServicos = data;
        // Itera por todos os serviços
        todosOsServicos.map(function(todosOsServicos){
            // Se o serviço tem o obra_id igual ao id da obra desejada, adiciona ele a saída
            if (todosOsServicos.obra_id === idObra){
                saida += '<div class="col-12"><p class="tituloServico">' + `${todosOsServicos.tipo}` + ':</p><p class="descricaoServico">' + `${todosOsServicos.descricao}` + '</p><br><button class="btn" data-bs-toggle="modal" data-bs-target="#modal' + `${todosOsServicos.tipo}` + '">CANDIDATAR-SE</button></div>'
                //Adiciona o seu modal
                saidaModal += '<div class="modal" id="modal' + `${todosOsServicos.tipo}` + '" tab-index="-1" aria-labelledby="tituloModal' + `${todosOsServicos.tipo}` + '" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="tituloModal' + `${todosOsServicos.tipo}` + '">' + `${todosOsServicos.tipo}` + '</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><textarea rows="8" cols="56" placeholder="Digite sua proposta aqui" autofocus></textarea></div><div class="modal-footer"><button type="button" class="btn btn-primary">Enviar</button></div></div></div></div>'
            }
        })
        // Manda os serviços para o html
        divServicos.innerHTML = saida;
        mainModal.innerHTML = saidaModal;
    })