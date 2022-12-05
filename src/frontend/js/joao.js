
// variaveis para definir os objetos que serão usados no codigo
const btnDropDown = document.querySelector('.btnDropDown');
const dropDownIcon = btnDropDown.querySelector('span');
const mobileMenu = document.querySelector('.mobileMenu');

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


let deslogado=1



function mudarNav(){
//   ao clicar serão inseridos uma classe que mudarão o CSS dos elementos
    menuNavbar.classList.toggle('logado');
    loginNavbar.classList.toggle('logado');
    registrarNavbar.classList.toggle('logado');

    // executa esse codigo se estiver deslogado
    if (deslogado==1){
        item5DropDown.classList.add('sumir');
        item1DropDown.innerText="Home";
        item1DropDown.href="home.html";
        item2DropDown.innerText="Obras";
        item2DropDown.href="obras.html";
        item3DropDown.innerText="Perfil";
        item3DropDown.href="meuPerfil.html";
        item4DropDown.innerText="Como funciona";
        item4DropDown.href="comoFunciona.html";

        deslogado=2
            // executa esse codigo se estiver logado
    } else{
        item1DropDown.innerText="Home";
        item1DropDown.href="home.html";
        item2DropDown.innerText="Obras";
        item2DropDown.href="obras.html";
        item3DropDown.innerText="Como funciona";
        item3DropDown.href="comoFunciona.html";
        item4DropDown.innerText="Registrar-se";
        item4DropDown.href="cadastro.html";

        item5DropDown.classList.remove('sumir');
      
        deslogado=1
    }

    
    console.log(deslogado)
}

const menu=document.getElementById("menuNavbarGrande");


// aciona o menu dropdown
function abrirMenu(){
    mobileMenu.classList.toggle('is-open');

}
