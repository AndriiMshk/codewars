function nbDig(n, d) {
    let count = 0
    for (let i = 0; i <= n; i++) {
        let k = i**2
        for (let j = 0; j < k.toString().split('').length; j++) {
            if (k.toString().split('')[j] == d) {
                count++
            }
        }
    } return count
}