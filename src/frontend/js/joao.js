
// variaveis para definir os objetos que serão usados no codigo
const btnDropDown = document.querySelector('.btnDropDown');
const dropDownIcon = btnDropDown.querySelector('span');
const mobileMenu = document.querySelector('.mobileMenu');
let deslogado = 1;

// função para abrir o menu dropdown ao clicar no logo no menu responsivo do celular
btnDropDown.addEventListener('click',()=>{
    dropDownIcon.innerText=dropDownIcon.innerText=== 'menu'
    ? 'close'
    : 'menu';

    mobileMenu.classList.toggle('is-open');
})

// variaveis para definir os obejtos para o codigo de mduar a navbar ao estar logado ou nao
const menuNavbar=document.querySelector('.menuNavbar');
const loginNavbar=document.querySelector('.loginNavbar');
const registrarNavbar=document.querySelector('.registrarNavbar');
const item1DropDown=document.querySelector('.item1DropDown');
const item2DropDown=document.querySelector('.item2DropDown');
const item3DropDown=document.querySelector('.item3DropDown');
const item4DropDown=document.querySelector('.item4DropDown');
const item5DropDown=document.querySelector('.item5DropDown');


// variavel para ver se o cliente esta logado ou deslogado
// 1 = deslogado, 2=logado

fetch('/cookies')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let cookies = String(data);
        console.log(cookies)
        if (cookies.includes("deslogado")){
            deslogado = 1;
        }
        else if (cookies.includes("empreiteiro")) {
            deslogado = 2;

        }            
        mudarNav();
    })


fetch('/cookiesAdmin')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let cookiesAdmin = String(data);
        console.log(cookiesAdmin)
        if (cookiesAdmin.includes("deslogado")){
            deslogado = 1;
        }
        else {
            deslogado = 3;
            console.log(deslogado);
        }
        mudarNav()
    })
    console.log(deslogado);
    





function mudarNav(){
    console.log(deslogado)

    //  Navbar quando a o usuario estiver deslogado
    if (deslogado==1){

        menuNavbar.classList.remove('logado');
        loginNavbar.classList.remove('logado');
        registrarNavbar.classList.remove('logado');

        item1DropDown.innerText="Home";
        item1DropDown.href="home.html"
        item2DropDown.innerText="Obras";
        item2DropDown.href="obras.html"
        item3DropDown.innerText="Perfil";
        item3DropDown.href="meuPerfil.html"
        item4DropDown.innerText="Como funciona";
        item4DropDown.href="comoFunciona.html"
        item5DropDown.classList.add('sumir');


    // Navbar Quando o Empreiteiro Estiver Logado 
    } else if(deslogado==2){
        menuNavbar.classList.add('logado');
        loginNavbar.classList.add('logado');
        registrarNavbar.classList.add('logado');
        
        item1DropDown.innerText="Obras";
        item1DropDown.href="obras.html"
        item2DropDown.innerText="Home";
        item4DropDown.href="home.html"
        item2DropDown.innerText="Como funciona";
        item4DropDown.href="comoFunciona.html"
        item4DropDown.innerText="Contato Wpp";
        item4DropDown.href="wpp.html"
        item5DropDown.innerText="Sair";
        item4DropDown.href="home.html"
        item5DropDown.classList.remove('sumir');
      
    
        // Navbar Admin
    } else if(deslogado==3){
        menuNavbar.classList.add('logado');
        loginNavbar.classList.add('logado');
        registrarNavbar.classList.add('logado');

        item1DropDown.innerText="Item1Admin";
        item2DropDown.innerText="Item2Admin";
        item3DropDown.innerText="Item3Admin";
        item4DropDown.innerText="Item4Admin";
        item5DropDown.innerText="Sair";
        item5DropDown.classList.remove('sumir');
    }



    

}

const menu=document.getElementById("menuNavbarGrande");


// aciona o menu dropdown
function abrirMenu(){
    mobileMenu.classList.toggle('is-open');

}

//Te redireciona para a home
function voltarHome(){
    window.location.href = "home.html";
}


function logout(){
    document.getElementById("modalLogout").setAttribute('aria-hidden', 'true');
    document.getElementById("modalLogout").setAttribute('aria-hidden', 'true');
}

function removeCookie() {
    location.href = '../logout?cookie='
}