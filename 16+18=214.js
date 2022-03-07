function add(num1, num2) {
    num1 = num1.toString().split('').reverse()
      num2 = num2.toString().split('').reverse()
      let length = Math.max(num1.length, num2.length)
      let res = []
      for (let i = length -1; i >= 0; i--) {
        res.push((+num1[i] || 0) + +(num2[i] || 0))
      } return +res.join('')

      //11111111
      //1111111

  }