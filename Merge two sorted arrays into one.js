function mergeArrays(arr1, arr2) {
    arr3 = []
    arr4 = []
    arr3.push(...arr1, ...arr2)
    arr3.sort(function(a, b) {
        return a - b;
      });
      for (let i in arr3) {
          if (arr3[i] != arr3[i - 1]) {
            arr4.push(arr3[i])
          }
      } return arr4
}