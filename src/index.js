function reverse(n) {
    let a = 0
    n *= n < 0 ? -1 : 1
    while (n >= 1) {
        a = ~~(n % 10) + a * 10
        n /= 10
    }
    return a
}

module.exports = reverse

console.log(reverse(225))