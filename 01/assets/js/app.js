const a = '4.2';
const b = 9;

console.log(a, b);

// -------------------------- 1. ----------------------------------------------------------------

console.log('Zmienna a jest typu', typeof a);
console.log('Zmienna b jest typu', typeof b);

// -------------------------- 2. ----------------------------------------------------------------

const newA = parseFloat(a);

const newA2 = newA + b;

const newA3 = newA2 - b;

const newA4 = newA3 * b;

const newA5 = newA4 / b;

const newA6 = newA5 % b;

let newB = 9
newB++;

let newB1 = 9
newB--;

const newA9 = a + b;

if (newA2 > 20) {
    console.log('Wynik: ' + newA2 + ' jest większy niż 20')
} else {
    console.log('Wynik: ' + newA2 + ' jest mniejszy niż 20')
}

if (newA3 > 20) {
    console.log('Wynik: ' + newA3 + ' jest większy niż 20')
} else {
    console.log('Wynik: ' + newA3 + ' jest mniejszy niż 20')
}

if (newA4 > 20) {
    console.log('Wynik: ' + newA4 + ' jest większy niż 20')
} else {
    console.log('Wynik: ' + newA4 + ' jest mniejszy niż 20')
}

if (newA5 > 20) {
    console.log('Wynik: ' + newA5 + ' jest większy niż 20')
} else {
    console.log('Wynik: ' + newA5 + ' jest mniejszy niż 20')
}

// -----------------------------------------------------------------------------------------


