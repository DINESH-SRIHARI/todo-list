let mc=document.getElementById('list');
function addtolist(){
    let nd=document.getElementById('ent');
    let x=nd.value
    let typ=document.createElement('input')
    typ.type='checkbox';
    typ.classList.add('mak')
    let div=document.createElement('div')
    let p=document.createElement('p')
    div.classList.add('temp')
    p.innerText=x
    mc.appendChild(div)
    div.appendChild(typ)
    div.appendChild(p)
    nd.value=""
}
let into=document.querySelector('.fa-solid');
    into.addEventListener("click",clicked);
function clicked(){
    mc.innerHTML=""
}