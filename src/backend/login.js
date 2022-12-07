function validaLogin(){

    var usuarios

    var usuario

    //variáveis que armazenam o que for digitado pelo usuário como email e senha para serem validados em seguida com duas lógicas de if e else, sendo exibidos os erros em cada caso
    
    var email_usuario = document.getElementById("email").value
    var senha_usuario = document.getElementById("senha").value

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
                    if(usuario.senha == senha_usuario) {
                        window.location.href = '/login?usuario_id=' + `${usuario.usuario_id}`
                        status_login = true;
                        //window.location.href = 'meuPerfil.html?email=' + `${email_usuario}`
                        
                    }
                    else {
                        document.getElementById("erro").innerHTML = `<p class = "text-danger">Email ou senha incorretos.</p>`
        
                    }
                }
                else {
                    document.getElementById("erro").innerHTML = `<p class = "text-danger">Email ou senha incorretos.</p>`
                }
            })

        })

}