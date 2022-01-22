// число n (n >= 0)
// цифру d (0 <= d <= 9)
// в квадрат все числа k (0 <= k <= n) между 0 и n
// количество цифр d, использованных при написании всех k**2


function nbDig(n, d) {
    let s =[]
    let count = 0
    for (let i = 0; i <= n; i++) {
        let k = i**2
        m = k.toString().split('')
        s.push(m)
        for (let j = 0; j < m.length; j++) {
            if (m[j] == d) {
                count++
            }
        }
    } return count
}

// const square = (number, searchNumber) => 
//     Array(number).reduce((acc, numb) => {
//         console.log('numb', `${numb * numb}`);
//         console.log('include', `${numb * numb}`.includes(searchNumber));
//         return `${numb * numb}`.includes(searchNumber) ? acc + 1 : acc
//     }, 0);

// console.log(square(3, 9));