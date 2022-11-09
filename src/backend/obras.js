const url = '/obras';

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let obras = data;
            let saidaGet = '';
            let cidades = [];
            let saidaCidades = '';
            obras.map(function (obras) {
                if (!(obras.cidade in cidades)){
                    cidades.append(obras.cidade);
                }
                saidaGet += '<strong> ' + `${obras.nome}` + '</strong> ' + `${obras.endereco}` + '</strong> ' + `${obras.dataInicio}` + '</strong> ' + `${obras.dataFim}` + '</strong> ' + `${obras.descricao}`;
                saidaGet += ' - <a href="/atualizar.html?obra_id=' + `${obras.obra_id}` + '">EDITAR</a>';
                saidaGet += ' | <a href="/removeObra?obra_id=' + `${obras.obra_id}` + '">REMOVER</a></br>';
            });
            for (cidade in cidades){
                saidaCidades += '<option value="cidade"></option></br>'
            }
            document.getElementById('cidades').innerHTML = saidaCidades;
            document.getElementById('nomesDasObras').innerHTML = saidaGet;
        })
        .catch(function (error) {
            console.log(error);
        });
