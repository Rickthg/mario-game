

const jump = () => {
    const mario = document.querySelector('.mario')

    mario.classList.add ('jump')

setTimeout(() =>{

    mario.classList.remove ('jump')

}, 500);

}

const loop = setInterval(() => {

    const turtle = document.querySelector('.turtle')

    const turtlePosition = turtle.offsetLeft;

    if (turtlePosition <= 120){
        turtle.style.animation = 'none';
    }
}, 10);

document.addEventListener('keydown', jump)