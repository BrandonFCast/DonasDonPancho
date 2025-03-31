const cards = document.getElementsByClassName('product-card');
const inputs = document.getElementsByClassName('input-text')

let currentMoveIndex = 0;

const moveSlide = () => {
    const total = 280 + (-350 * currentMoveIndex);
    for (let card of cards) {
        card.style.transform = `translateX(${total}px)`
    }
}

document.getElementById("btnR").addEventListener('click', () => {
    if (currentMoveIndex >= 4) return;
    currentMoveIndex++;
    moveSlide();
})
document.getElementById("btnL").addEventListener('click', () => {
    if (currentMoveIndex <= 0) return;
    currentMoveIndex -= 1;
    moveSlide();
})

document.getElementById('buy-button').addEventListener('click', () => {
    let isCorrect = true;
    for(let inp of inputs) {
        const val = inp.checkValidity();
        isCorrect = isCorrect & val;
    }
    if (isCorrect) {
        alert("pago realizado con exito, disfruta tu dona :D");
    } else {
        alert("hay campos invalidos")
    }
})

let total = 0;
const tot = document.getElementById("total");
const addDonutToCar = (id) => {
    const span = document.getElementById(id);
    const currentNum = parseInt(span.innerText);
    span.innerText = currentNum + 1;
    total++;
    tot.innerText = total * 10 + " MXN";
}

window.addDonutToCar = addDonutToCar;