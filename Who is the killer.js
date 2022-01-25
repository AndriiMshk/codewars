suspectInfo = { 'James': ['Jacob', 'Bill', 'Lucas'],
                'Johnny': ['David', 'Kyle', 'Lucas'],
                'Peter': ['Lucy', 'Kyle']
            }

 dead = ['Lucas', 'Bill']

 function killer(suspectInfo, dead) {
    for (x in suspectInfo) {
      if (suspectInfo[x].some( y => dead.includes(y))){}
     }console.log(x)
}

  killer(suspectInfo, dead)

  //  https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/solutions/javascript