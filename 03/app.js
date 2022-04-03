const min = 1;
const max = 100;
let result

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// -------------------------------- 1. --------------------------------

function getSum(a, b, c) {
    let x
    let y
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
        result = x + y
    } else if (newB > newC) {
        x = newB
        if (newA > newC) {
            y = newA
        } else {
            y = newC
        }
        result = x + y
    } else {
        x = newC
        if (newA > newB) {
            y = newA
        } else {
            y = newB
        }
        result = x + y
    }
    return result
}

// ----------------------------- end of 1. ----------------------------

// -------------------------------- 2. --------------------------------

const isEven = function() {
    if (typeof sum !== 'number') {
        console.log('null')
    } else {
        result = (sum % 2 === 0) ? true : false
        console.log(result)
    }
    return result
}

// ----------------------------- end of 2. ----------------------------

// -------------------------------- 3. --------------------------------

function showInfo (sum, even) {
    switch(even) {
        case 'null':
            console.log(`Podany argument ${sum} nie jest liczbą`)
            break
        case true:
            console.log(`Podany argument ${sum} jest parzysty`)
            break
        case false:
            console.log(`Podany argument ${sum} jest nieparzysty`)
            break
        default:
            console.log('Błędny wynik z funkcji drugiej!')
    }
}

// ----------------------------- end of 3. ----------------------------

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a, b, c)
const even = isEven(sum)

showInfo(sum, even)