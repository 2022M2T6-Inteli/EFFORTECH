const url = '/obras';

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let obras = data;
            let saida = '';
            obras.map(function (obras) {
                saida += '<strong> ' + `${obras.nome}` + '</strong> ' + `${obras.endereco}` + '</strong> ' + `${obras.dataInicio}` + '</strong> ' + `${obras.dataFim}` + '</strong> ' + `${obras.descricao}`;
                saida += ' - <a href="/atualizar.html?obra_id=' + `${obras.obra_id}` + '">EDITAR</a>';
                saida += ' | <a href="/removeObra?obra_id=' + `${obras.obra_id}` + '">REMOVER</a></br>';
            });
            document.getElementById('nomesDasObras').innerHTML = saida;
        })
        .catch(function (error) {
            console.log(error);
        });
