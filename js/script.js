

const jump = () => {
    const mario = document.querySelector('.mario')

    mario.classList.add ('jump')

setTimeout(() =>{

    mario.classList.remove ('jump')

}, 500);

}

const loop = setInterval(() => {
    
    const mario = document.querySelector('.mario')

    const turtle = document.querySelector('.turtle')

    const turtlePosition = turtle.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '  ');

    console.log (marioPosition);
    if (turtlePosition <= 95 && turtlePosition > 0 && marioPosition < 80) {

        turtle.style.animation = 'none';
        turtle.style.left = `${turtlePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src="../mario-game/images/game-over.png";
        mario.style.width = '65px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }   

}, 10);

document.addEventListener('keydown', jump)