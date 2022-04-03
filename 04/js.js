let table = []

function createArray(min, max) {
    for (let i=0; i < 20; i++) {
        table[i] = Math.round((Math.random() * (max - min)) + min);
    }
    return table
}

const arr = createArray(1,100)
console.log(arr)

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a
    })
    return arr.slice(0, 10)
}

const largest = getLargest(arr)
console.log(largest)
