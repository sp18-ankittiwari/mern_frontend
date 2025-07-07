const boxes = document.querySelectorAll('.box');  
window.addEventListener('scroll', calculate);

calculate();

function calculate(){
    const showingRegion = window.innerHeight/5 *4; 
    console.log(showingRegion); 

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);

        if (showingRegion > boxTop){
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}