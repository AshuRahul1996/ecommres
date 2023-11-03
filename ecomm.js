

function getValue()
{
    var value = document.getElementById("btn");
    
    alert("product is add");
    console.log("product is add")
    
    
    
}

function getList()
{
    var value = document.getElementById("list");
    
    alert("product is listed");
    console.log("product is listed")
}

const se = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("main-card")
    const product = document.querySelectorAll("card")
    const pname = storeitems .getElementsByTagName("h2")

   for(var i=0; i < pname.length; i++){
    let match = product[i].getElementsByTagName('h2')[0];

    
        let textvalue = match.textContent ||match.innerHTML
        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
        }else{
            product[i].style.display = "none";
        }
    

   } 
}
const btn = document.querySelector('.read-more-btn')
const text =document.querySelector('.card__read-more');
const cardHolder = document.querySelector('.main-card');

cardHolder.addEventListener('click', e=>{
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if(!isReadMoreBtn)
    return;
const currentText = e.target.parentNode.querySelector('.card__read-more');
currentText.classList.toggle('card__read-more--open');
current.textContent = current.textContent.includes('Read More..') ? 'Read Less..': 'Read More..';
});

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () =>{
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener("click", ()=> toggleNavbar());