const insert = document.getElementById('container');


window.addEventListener('keydown' , (event)=> {
    insert.innerHTML = ` 
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keycodes</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.codes</small>
        </div>`
});