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
    // let fa=document.createElement('i')
    // fa.classList.add('fa-solid')
    // fa.classList.add('fa-circle-xmark')
    // fa.style.color="#050505"
    p.innerText=x


    
    

    mc.appendChild(div)
    div.appendChild(typ)
    div.appendChild(p)
    // div.appendChild(fa)
    // into.addEventListener("click",clicked);
    nd.value=""
    save()
    console.log("added")
}
// function clicked(){
//     let cls=document.querySelector('.temp')
//     cls.classList.add('hide')
// }

let into=document.querySelector('.fa-solid');
    into.addEventListener("click",clicked);
function clicked(){
    mc.innerHTML=""
    save()

}
function save(){
    localStorage.setItem("data",mc.innerHTML)
}
function show(){
    mc.innerHTML=localStorage.getItem("data");
}
show();