/* Description:
Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements with the same 
value next to each other and preserving the original order of elements. */

iterable = [1, 1, 2, 3, 3, 3, 3, 4, 0, 4, 5, 5, 6, 5]
var uniqueInOrder=function(iterable){
b = []
for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
        b.push(iterable[i])
    }
    } 
    return b;
}
uniqueInOrder(iterable)
console.table(b)
