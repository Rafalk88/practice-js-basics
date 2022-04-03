let table = []

const arr = createArray(10,200) // pkt. 1
console.log(arr)

const largest = getLargest(arr) // pkt. 2
console.log(largest)

const avg = getAvg(largest) // pkt. 3
console.log(avg)

// -------------------------------- 1. --------------------------------

function createArray(min, max) {
    for (let i=0; i < 20; i++) {
        table[i] = Math.round((Math.random() * (max - min)) + min);
    }
    return table
}

// ----------------------------- end of 1. ----------------------------

// -------------------------------- 2. --------------------------------

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a
    })
    return arr.slice(0, 10)
}

// ----------------------------- end of 2. ----------------------------

// -------------------------------- 3. --------------------------------

function getAvg(largest) {
    let avg = 0
    largest.forEach(function(num) {
        avg += num
    })
    return (avg / largest.length)
}

// ----------------------------- end of 3. ----------------------------