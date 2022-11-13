// Definições de variáveis que serão utilizadas mais a frente
const urlObras = '/obras';
const urlServicos = '/servicos'
const selectEstados = document.getElementById('estado'); 
const selectCidades = document.getElementById('cidade'); 
const selectServicos = document.getElementById('servico')
let cidades = [];
let estados = [];
let tiposDeServico = [];
let obras;
let servicos;

// Faz a requisição GET das obras 
fetch(urlObras)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        obras = data;
        obras.map(function (obras) {
            // Define a lista de estados abrangidos pelas obras
            if (!(estados.includes(obras.estado))){
                estados.push(obras.estado);
            }
            // Define a lista de cidades abrangidas pelas obras
            if (!(cidades.includes(obras.cidade))){
                cidades.push(obras.cidade);
            }
        });

        // Adiciona os estados ao select de estados
        for (let estado of estados) {
            let novoEstado = new Option(estado, estado);
            selectEstados.add(novoEstado);
        }
        // Adiciona as cidades ao select de cidades
        for (let cidade of cidades) {
            let novaCidade = new Option(cidade, cidade);
            selectCidades.add(novaCidade);
        }
        mostrarObras(obras)
    })
    .catch(function (error) {
        console.log(error);
});

// Faz a requisição GET dos serviços
fetch(urlServicos)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        servicos = data;
        servicos.map(function (servicos) {
            // Define os tipos de serviços existentes no banco de dados
            if (!(tiposDeServico.includes(servicos.tipo))){
                tiposDeServico.push(servicos.tipo);
            }
        })
        // Adiciona os tipos de serviços ao select de serviços
        for (let tipoDeServico of tiposDeServico){
            let novoTipoDeServico = new Option(tipoDeServico, tipoDeServico);
            selectServicos.add(novoTipoDeServico);
        }
    });

// Função para definir as cidades mostradas no select de cidades, o que é atualizado dependendo do estado selecionado
function definirCidades(){
    while (selectCidades.options.length > 1) {
        selectCidades.remove(selectCidades.options.length - 1);
    }
    let estado = selectEstados.value;
    if (estado == 'todos'){
        for (cidade of cidades){
            let novaCidade = new Option(cidade, cidade)
            selectCidades.add(novaCidade);
        }
    } else{
        cidadesEspecificas = [];
        obras.map(function (obras) {
        if (obras.estado == estado){
            if (!(cidadesEspecificas.includes(obras.cidade))){
                cidadesEspecificas.push(obras.cidade)
            }
            }
        });
        for (cidade of cidadesEspecificas){
            let novaCidade = new Option(cidade, cidade)
            selectCidades.add(novaCidade);
        }
    }
}

// Realiza o filtro por cidade e estado e chama no final a função de filtro por serviço
function filtroRegional(){
    let estado = selectEstados.value;
    let cidade = selectCidades.value;
    let obrasFiltradasporRegiao = []
    saidaGet = ''
    if (!(cidade == 'todos')){
        for(let obra of obras){
            if (obra.cidade == cidade){
                obrasFiltradasporRegiao.push(obra);
            }
        }
    } else if (!(estado == 'todos')){
        for(let obra of obras){
            if (obra.estado == estado){
                obrasFiltradasporRegiao.push(obra);
                }
            } 
    } else{
        for(let obra of obras){
            obrasFiltradasporRegiao.push(obra);
        }
    } 
    filtroPorServicos(obrasFiltradasporRegiao)
}

// Filtra as obras passadas como argumento de acordo com o serviço selecionado no select de tipos de serviço
function filtroPorServicos(obras){
    let tipoDeServicoSelecionado = selectServicos.value;
    let obrasFiltradasPorServico = [];
    let idsDasObrasDesejadas = []
    if (tipoDeServicoSelecionado === 'todos'){
        for (obra of obras){
            obrasFiltradasPorServico.push(obra);
        }
    } else{
        for (servico of servicos){
            if (servico.tipo === tipoDeServicoSelecionado){
                idsDasObrasDesejadas.push(servico.obra_id);
            }
        }
        for (obra of obras){
            console.log(idsDasObrasDesejadas)
            console.log(obra.obra_id)
            if (idsDasObrasDesejadas.includes(obra.obra_id)){
                obrasFiltradasPorServico.push(obra);
            }
        }
    }
    mostrarObras(obrasFiltradasPorServico);
}

// Função para mostrar as obras passadas como argumento na tela
function mostrarObras(obras){
    let saidaGet = ''
    for (obra of obras){
        saidaGet += '<strong> ' + `${obra.nome}` + '</br>';
    }
    document.getElementById('nomesDasObras').innerHTML = saidaGet;
}
