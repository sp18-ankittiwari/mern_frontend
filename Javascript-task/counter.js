
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const timerDisplay = document.querySelector('.timer');
const boxesContainer = document.querySelector('.boxes');
const middleBox = document.querySelector('.middle-box');

let id = null;
let count = 0;
const maxCount = 10;

function createBox(position) {
    const box = document.createElement('div');
    box.classList.add(position === 'top' ? 'top-box-add' : 'bottom-box-add');
    box.textContent = 'Block';
    box.style.margin = 5 + 'px' ;
    return box;
}

function Timer() {
    if (id !== null) return; 

    id = setInterval(() => {
        if (count < maxCount) {
            count++;
            timerDisplay.innerText = String(count).padStart(2, '0') + 's';

            const topBlock = createBox('top');
            boxesContainer.insertBefore(topBlock, middleBox);

            const bottomBlock = createBox('bottom');
            boxesContainer.insertBefore(bottomBlock, middleBox.nextSibling);

        } else {
            clearInterval(id);
            id = null;
        }
    }, 1000);
}

function StopTimer() {
    clearInterval(id);
    id = null;
}

function reset() {
    StopTimer();
    count = 0;
    timerDisplay.innerText = '00s';
    const allBoxes = document.querySelectorAll('.top-box-add, .bottom-box-add');
    allBoxes.forEach(box => box.remove());
}

startBtn.addEventListener('click', Timer);
stopBtn.addEventListener('click', StopTimer);
resetBtn.addEventListener('click', reset); 
