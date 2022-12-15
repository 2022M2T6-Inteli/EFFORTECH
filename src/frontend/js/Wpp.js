const btnDropDown=document.querySelector('.btnDropDown');
const dropDownIcon=btnDropDown.querySelector('span');
const mobileMenu=document.querySelector('.mobileMenu');
const wpp=document.querySelector('.wpp');
const filtro=document.querySelector("#filtro");


// Aciona o menu dropdown quando a NavBar estiver em celular
btnDropDown.addEventListener('click',()=>{
    dropDownIcon.innerText=dropDownIcon.innerText=== 'menu'
    ? 'close'
    : 'menu';

    mobileMenu.classList.toggle('is-open');
})

const menuNavbar=document.querySelector('.menuNavbar');
const loginNavbar=document.querySelector('.loginNavbar');
const registrarNavbar=document.querySelector('.registrarNavbar');
const item1DropDown=document.querySelector('.item1DropDown');
const item2DropDown=document.querySelector('.item2DropDown');
const item3DropDown=document.querySelector('.item3DropDown');
const item4DropDown=document.querySelector('.item4DropDown');
const item5DropDown=document.querySelector('.item5DropDown');

let deslogado=3

function mudarNav(){
  

    //  Navbar quando a o usuario estiver deslogado
    if (deslogado==1){

        item1DropDown.innerText="Home";
        item2DropDown.innerText="Obras";
        item3DropDown.innerText="Perfil";
        item4DropDown.innerText="Como funciona";
        item5DropDown.classList.add('sumir');


    // Navbar Quando o Empreiteiro Estiver Logado 
    } else if(deslogado==2){
        menuNavbar.classList.add('logado');
        loginNavbar.classList.add('logado');
        registrarNavbar.classList.add('logado');
        
        item1DropDown.innerText="Obras";
        item2DropDown.innerText="Home";
        item3DropDown.innerText="Como funciona";
        item4DropDown.innerText="Contato Wpp";
        item5DropDown.innerText="Sair";
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



    
    console.log(deslogado)
}

const menu=document.getElementById("menuNavbarGrande");


// Abrir menu DropDown quando tiver Navbar
function abrirMenu(){
    mobileMenu.classList.toggle('is-open');

}

// Abrir a Div que vai redirecionar para o Wpp
function aparecer(){
    $("#wpp").slideDown("slow");
}

// Aqui vão ser os numeros de Wpp dos responsaveis de cada regiao!
// Use as duas primeiras variaveis de exemplo
let ac ="11993416930"
let al ="32999392807"
let ap ="Numero ap"
let am ="Numero am"
let ba ="Numero ba"
let ce ="Numero ce"
let df ="Numero df"
let es ="Numero es"
let go ="Numero go"
let ma ="Numero ma"
let mt ="Numero mt"
let ms ="Numero ms"
let mg ="Numero mg"
let pa ="Numero pa"
let pb ="Numero pb"
let pr ="Numero pr"
let pe ="Numero pe"
let pi ="Numero pi"
let rj ="Numero rj"
let rn ="Numero rn"
let rs ="Numero rs"
let ro ="Numero ro"
let rr ="Numero rr"
let sc ="Numero rs"
let sp ="Numero sp"
let se ="Numero se"
let to ="11994759615"

// esse eh o caminho que vai direcionar para a pagina Wpp
const caminho="https://wa.me/"
 
// Função para abrir o Wpp
function abrirwpp(){
    let estado=filtro.options[filtro.selectedIndex].value;
    console.log
    if (estado=="AC"){
        url=(caminho+ac)

        const aba=window.open(url,'_blank');

        aba.focus();
  
    } 
    if (estado=="AL"){
        url=(caminho+al)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="AP"){
        url=(caminho+ap)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="AM"){
        url=(caminho+am)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="BA"){
        url=(caminho+ba)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="DF"){
        url=(caminho+df)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="ES"){
        url=(caminho+es)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="GO"){
        url=(caminho+go)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="MA"){
        url=(caminho+ma)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="MT"){
        url=(caminho+mt)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="MG"){
        url=(caminho+mg)

        const aba=window.open(url,'_blank');

        aba.focus();
    }  
    if (estado=="PA"){
        url=(caminho+pa)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="PB"){
        url=(caminho+pb)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="PR"){
        url=(caminho+pr)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="PE"){
        url=(caminho+pe)

        const aba=window.open(url,'_blank');

        aba.focus();
    }  
    if (estado=="RJ"){
        url=(caminho+rj)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="RN"){
        url=(caminho+rn)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="RS"){
        url=(caminho+rs)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="RO"){
        url=(caminho+ro)

        const aba=window.open(url,'_blank');

        aba.focus();
    }  
    if (estado=="RR"){
        url=(caminho+rr)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="SC"){
        url=(caminho+sc)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="SP"){
        url=(caminho+sp)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="SE"){
        url=(caminho+se)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   
    if (estado=="TO"){
        url=(caminho+to)

        const aba=window.open(url,'_blank');

        aba.focus();
    }   

}