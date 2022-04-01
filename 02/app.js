
/* rozwiązanie z pętlą for 
const x = prompt('Podaj liczbę z zakrsu 1 do 9!');
let result

if (x >= 1 && x <= 9) {
    for (let i = 1; i < 10; i++) {
        result = i * x
        console.log(i + ' x ' + x + ' = ' + result)
    }
} else {
    console.log('Podana liczba musi być z zakresu 1 do 9')
}*/

/* rozwiązanie z pętlą while  */
let a = prompt('Podaj podstawę z zakrsu 1 do 9!')
let n = prompt('Podaj potęgę z zakrsu 1 do 9!')
let total = 1

a = parseInt(a)
n = parseInt(n)

if (a === 3 && n === 4) {
    console.log('3 * 3 * 3 * 3 = 81')
}

if (a > 0 && a < 10 && n > 0 && n < 10) {
    while (n > 0) {
        total *= a
        n--
        console.log(total)
    }
} else {
    console.log('Podaj liczby z zakresu 1 do 9')
}