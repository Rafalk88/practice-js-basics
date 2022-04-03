let table = []

const arr = createArray(1,100)
console.log(arr)

const largest = getLargest(arr)
console.log(largest)

const avg = getAvg(largest)
console.log(avg)

function createArray(min, max) {
    for (let i=0; i < 20; i++) {
        table[i] = Math.round((Math.random() * (max - min)) + min);
    }
    return table
}

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a
    })
    return arr.slice(0, 10)
}

function getAvg(largest) {
    let avg = 0
    largest.forEach(function(num) {
        avg += num
    })
    return (avg / largest.length)
}