const { createHash } = require('crypto');

function hash(senha) {
  return createHash('sha256').update(senha).digest('hex');
}

function validaLogin(){

    var usuarios

    var usuario

    var email_usuario = document.getElementById("email").value
    var senha_usuario = document.getElementById("senha").value
    // var senha_usuario = hash(document.getElementById("senha").value)

    var status_login = false

    fetch('/usuario')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            usuarios = data;
            usuarios.map(function (usuarios) {
                if(usuarios.email == email_usuario) {
                    usuario = usuarios
                }

            })

            // console.log(usuario.senha)

            if(usuario.senha == senha_usuario) {
                status_login = true;
                console.log("o login foi validado")

                //if(senha_usuario == senha_hash)
                window.location.href = 'meuPerfil.html?email_usuario' + `${usuarios.email}`

            }
            else {
                document.getElementById("erro").innerHTML = `<p class = "text-danger">Email ou senha incorretos.</p>`
                console.log("o login foi validado NEM")

            }
        })

}

