const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const cookieParser = require("cookie-parser");

// const { createHash } = require('crypto');

// function hash(senha) {
//   return createHash('sha256').update(senha).digest('hex');
// }

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/modeloFisico.db'; // dois pontos barra sobe um nível + o nome da pasta entra nela

const hostname = '127.0.0.1';
const port = 1234;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static(".."));

/* Definição dos endpoints das OBRAS*/
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/obras', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM obras';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereObra', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO obras (nome, endereco, dataInicio, dataFim, descricao) VALUES ('" + req.body.nome + "', '" + req.body.endereco + "', '" + req.body.dataInicio + "', '" + req.body.dataFim + "', '" + req.body.descricao + "')";
    console.log(sql);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
    });
    res.write('<p>OBRA INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>'); //hiperlink volta
    db.close(); // Fecha o banco
    res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaObra', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    sql = `SELECT * FROM obras WHERE obra_id = ${req.query.obra_id}`;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaObra', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "UPDATE obras SET nome='" + req.body.nome + "', endereco='" + req.body.endereco + "', dataInicio = '" + req.body.dataInicio + "' , dataFim = '" + req.body.dataFim + "', descricao = '" + req.body.descricao + "' WHERE obra_id='" + req.body.obra_id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>OBRAS ATUALIZADAS COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeObra', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "DELETE FROM obras WHERE obra_id='" + req.query.obra_id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.write('<p>OBRAS REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});



app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

/* Definição dos endpoints dos USUARIOS*/
/******** CRUD ************/
app.get('/usuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM usuarios';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereUsuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO usuarios (nomeFantasia, cnpj, senha, email, contato1, contato2) VALUES ('" + req.body.nome + "', '" + req.body.cnpj + "', '" + req.body.senha + "', '" + req.body.email + "', '" + req.body.contato1 + "', '" + req.body.nome_empreiteiro + "')";
    console.log(sql);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
    });
    res.redirect("../frontend/home.html");
    db.close(); // Fecha o banco
    res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaUsuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    sql = 'SELECT * FROM usuarios WHERE usuario_id =' + req.body.usuario_id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaUsuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "UPDATE usuarios SET nomeFantasia='" + req.body.nomeFantasia + "', cnpj='" + req.body.cnpj + "', email = '" + req.body.email + "' , contato1 = '" + req.body.contato1 + "', contato2 = '" + req.body.contato2 + "' WHERE usuario_id='" + req.body.usuario_id + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.redirect("../frontend/home.html");
    db.close(); // Fecha o banco
});

app.get('/removeUsuario', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "DELETE FROM usuarios WHERE usuario_id='" + req.query.usuario_id + "'"; 
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.write('<p>OBRAS REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});

///// JOIN DAS TABELAS ///////
app.get('/obraMaisUsuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT obras.nome, usuarios.nomeFantasia, obras.nome FROM obras FULL OUTER JOIN usuarios ON obras.obra_id=usuarios.usuario_id';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

/* Definição dos endpoints dos SERVICOS*/
/******** CRUD ************/
app.get('/servicos', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM servicos';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/servicosId', (req, res) => {
    res.statusCode = 200;
    // const idObra  = req.params.idObra
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const sql = "SELECT * from servicos WHERE obra_id = '" + req.query.obra_id + "'";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/login', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.query.usuario_id;
    res.cookie("id", id, {
        httpOnly: true
    });
    res.redirect("../frontend/meuPerfil.html");
});

app.get('/cookies', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.headers.cookie){
        if(req.headers.cookie.includes("id")){
            res.json(req.headers.cookie);
        } else{
            res.json("deslogado");
        }
    } else{
        res.json("deslogado");
    }
});