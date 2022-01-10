/* This kata is about multiplying a given number by eight if it 
is an even number and by nine otherwise. */


function simpleMultiplication(number) {
    x = 0
    if (number % 2 === 0) {
        x = number * 8
    } else {
        x = number * 9
    } return x
}
