function reverse(n) {
    let a = 0
    n *= n < 0 ? -1 : 1
    for (let pos = 0; n >= 1; pos++) {
        a = ~~(n % 10) + a * 10
        n /= 10
    }
    return a
}

module.exports = reverse

console.log(reverse(225))