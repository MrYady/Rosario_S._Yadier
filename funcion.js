const viewslider = [...document.querySelectorAll('.viewslider')];
const menuItens = [...document.querySelectorAll('.navegacion')];
console.log(viewslider)

const options={
    root: null,
    rootMargin: '0px',
    threshold: 0.10
}

const observar = new IntersectionObserver(callback, options);
    observar.observe(viewslider[0]);


function callback(entries){
    entries.forEach(Entry => {
        if(Entry.isIntersecting == false){
            console.log('listo')
            menuItens[0].classList.toggle("viewAfter");
        }else{
            menuItens[0].classList.remove("viewAfter");
        }
    });

}

