
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę z zakrsu 1 do 9!');
let result

if (x >= 1 && x <= 9) {
    for (let i = 1; i < 10; i++) {
        result = i * x
        console.log(i + ' x ' + x + ' = ' + result)
    }
} else {
    console.log('Podana liczba musi być z zakresu 1 do 9')
}

/* rozwiązanie z pętlą while  */