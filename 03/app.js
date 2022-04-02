const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
    let x
    let y
    let sum
    newA = parseInt(a)
    newB = parseInt(b)
    newC = parseInt(c)

    if (newA > newB && newA > newC) {
        x = newA
        if (newB > newC) {
            y = newB
        } else {
            y = newC
        }
        sum = x + y
    } else if (newB > newC) {
        x = newB
        if (newA > newC) {
            y = newA
        } else {
            y = newC
        }
        sum = x+ y
    } else {
        x = newC
        if (newA > newB) {
            y = newA
        } else {
            y = newB
        }
        sum = x + y
    }

    return sum
}

console.log(getSum(a, b, c))

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}