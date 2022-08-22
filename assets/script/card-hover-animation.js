function handlemouseenter() {
    console.log("handle mouse enter,", this);
    this.classList.add('spider-card--hovered');
    document.body.id = `${this.id}-hovered`;
}
function handlemouseleave() {
    this.classList.remove('spider-card--hovered');
    document.body.id = '';
}
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName("spider-card");
    console.log(cardElements);
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handlemouseenter);
        card.addEventListener('mouseleave', handlemouseleave);

    }
}
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);