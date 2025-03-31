const cards = document.getElementsByClassName('product-card');

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