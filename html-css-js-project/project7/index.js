
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound, index) => {
    const btn = document.createElement('button');
    btn.innerText = sound;
    btn.classList.add('btn');

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
