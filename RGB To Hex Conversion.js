function rgb(r, g, b){
    return [].map.call(arguments, function(arg) {
     return arg <= 0 ? '00' : arg > 255 ? 'FF' : arg.toString(16);
   }).join('').toUpperCase();
 }