// Code your solutions in this file
function countDown(count) {

    for (let i = count; i >= 0; i--  ) {
        console.log(i)
    }
}

const cards = ['Lisa', 'Kaitlin', 'Jan'];
let newArray = []
function writeCards(cards) {

    for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful suprise gift!`);
    }
    return newArray;
}