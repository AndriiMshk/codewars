function sentence(list) { 
    return list.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]).map(x => Object.values(x)[0]).join(' ')
  }