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