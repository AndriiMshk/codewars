function findMissing(arr1, arr2) {
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    for (let i in arr1)
    if (arr1[i] != arr2[i]) 
      return arr1[i];
}