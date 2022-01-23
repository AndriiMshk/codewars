// число n (n >= 0)
// цифру d (0 <= d <= 9)
// в квадрат все числа k (0 <= k <= n) между 0 и n
// количество цифр d, использованных при написании всех k**2

 
function nbDig(n, d) {
    let count = 0
    for (let i = 0; i <= n; i++) {
        let k = i**2
        m = k.toString().split('')
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


// const nbDig = (n, d) =>
// [...Array(++n)].map((_, idx) => idx ** 2).join(``).split(d).length - 1;

// function nbDig(n, d) {
//     // your code
//   let arr = Array(n+1).fill(1).map((el,i) => i**2).join('').split('').filter(el=> el == d);

//   return arr.length;
// }

//const nbDig=(n, d)=>[...Array(n+1).keys()].map(el=>el**2).join('').split('').filter(e=>e==d).length;