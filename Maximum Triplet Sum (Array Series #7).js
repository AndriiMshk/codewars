numbers = [3,2,6,8,2,3]

function maxTriSum(numbers){
    const x = ([...new Set(numbers.sort((a,b)=>b-a))])
    console.log(x[0] + x[1] + x[2])
}

  maxTriSum(numbers)
