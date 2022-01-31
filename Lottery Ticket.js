function bingo(ticket, win){
    let miniWins = 0
  
    ticket.forEach(el => el[0].includes(String.fromCharCode(el[1])) && miniWins++)
  
    return miniWins >= win ? 'Winner!' : 'Loser!'
  }