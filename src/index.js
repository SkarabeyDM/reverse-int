module.exports = function reverse (n) {

    n *= n < 0 ? -1 : 1

    const numToArr = (num) => {
        let arr = []
        while (num >= 1) {
            arr.push(Math.floor(num % 10))
            num /= 10
        }
        return arr.reverse()
    }
    
    const arrToNumReverse = (arr) => {
        let num = 0
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            num += element * 10 ** i
        }
        return num
    }

    return arrToNumReverse(numToArr(n))
}