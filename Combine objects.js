const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

function combine(){
    let newArray = [...arguments];
    let obj = {};
    for(let i = 0; i < arguments.length; i++){
      for(let j in arguments[i]){
        if(!obj[j]){
        obj[j] = arguments[i][j];
        }
        else {
          obj[j] += arguments[i][j];
        }
      }
    } return obj
  }

combine(objA, objB)