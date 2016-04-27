var candybar = {
  unwrap: function(arr) {
    if (arr) {
      for (var i = 0; i < arr.length; i++) {
        Object.keys(arr[i]).forEach(function(key){
          var val = arr[i][key];
          if (val instanceof Array && val.length > 0) {
            arr[i][key] = val[0];
          }
        });
      }
    }
  }
};

module.exports = candybar;