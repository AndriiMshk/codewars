/*You'll be given a string, and have to return the sum of all characters as an int.
 The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291 */

function uniTotal (string) {
    sum = 0
    for (let i in string) {
    sum = sum + string.charCodeAt(i)
        }
        return sum
    }
    