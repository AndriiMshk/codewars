function sortMyString(S) {
    x = ''
    y = ''
    for (let i in S) { 
        i % 2? x += S[i] : y += S[i]
    }
   return y + ' ' + x
}