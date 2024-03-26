let trilho = document.getElementById('btnDark');
let body = document.querySelector('body');
let header = document.querySelector('header');
let section = document.querySelector('section');


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    section.classList.toggle('dark')

})




    
    


    