const jokesdiv = document.getElementById('jokes');
const button = document.getElementsByClassName('btn')[0];

const generatejokes = async() => {
    const res = await fetch("https://icanhazdadjoke.com/" , {
        headers: {
            'Accept': 'application/json'
        }
    });
    const result = await res.json();

    jokesdiv.innerText = result.joke;
    
    
}

generatejokes();

button.addEventListener('click' , generatejokes);