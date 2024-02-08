const jhon = document.querySelector('.jhon');
const pipe = document.querySelector('.pipe');

const pulo = () => {
    jhon.classList.add('pulo');

    setTimeout(() => {

        jhon.classList.remove('pulo');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const jhonPosition = +window.getComputedStyle(jhon).bottom.replace('px' , '');
    
    if(pipePosition <= 120 && pipePosition > 0 && jhonPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        jhon.style.animation = 'none';
        jhon.style.bottom = `${jhonPosition}px`;

        jhon.src = './imagens/raiva.png'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', pulo);