/*Given a string of digits, you should replace any digit
 below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*

Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», 
а любую цифру 5 и выше на «1». Верните полученную строку.*/

function fakeBin(x){
    y = ''
    for (let i in x) {
        if (x[i] < 5) {
            y = y + 0
        } else if ( x[i] >= 5) {
            y = y + 1
        }
    }
  return y
}