const btn = document.querySelector('.Search');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    input.classList.toggle('active');
    btn.classList.toggle('active');
});

document.addEventListener('click' , (e)=> {
    if (!document.querySelector('.container').contains(e.target)){
        input.classList.remove('active');
        btn.classList.remove('active');
    }
})
