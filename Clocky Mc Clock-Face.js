var whatTimeIsIt = function(angle) {
    let hour = Math.floor(angle / 30) 
    let min = Math.floor((angle % 30) * 2);
    if (hour < 10) {
        hour = "0"+ hour
    }
    if (hour <= 0) {
        hour = 12
    }
    if (min < 10) {
        min = "0" + min
    }
      return hour + ":" + min;
}
