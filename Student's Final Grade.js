function finalGrade (exam, projects) {
    x = 0
    if (exam > 90 || projects > 10) {
      x = 100
    } else if 
      (exam > 75 && projects >= 5) {
        x = 90
    } else if 
      (exam > 50 && projects >= 2) {
        x = 75
      } else {
        x = 0
    } return x
  }