const slider = [...document.querySelectorAll('.imgs')];
const currentElement = Number(document.querySelector('.slider_show').dataset.id);
let value;
value = currentElement 
const options={
    root: null,
    rootMargin: '0px',
    threshold: 0.25
}

const observar = new IntersectionObserver(callback, options);
const elemt = document.querySelector('.cont-slider');

observar.observe(elemt)
console.log.toString(observar.value)


function callback(entries){

setInterval(slider_show, 5000)

}


function slider_show(){
    console.log('Iniciando...')
     for(value === 0; value == slider.length+1;){
        value = value === 0 ? slider.length : 0;
        console.log("listo")
        value++
    }
    slider[currentElement-1].classList.toggle('slider_show');
}


let listElemts = document.querySelectorAll('.list-base');

listElemts.forEach(listElemt =>{
    listElemt.addEventListener('click', ()=>{
        
        let height = 0;
        let menu = listElemt.nextElementSibling;
        let men = listElemt.previousElementSibling;
        console.log(men)
        
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }

        menu.style.height = height+"px";
    })
})


