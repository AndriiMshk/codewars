function uniTotal (string) {
    sum = 0
    for (let i in string) {
    sum = sum + string.charCodeAt(i)
        }
        return sum
        }