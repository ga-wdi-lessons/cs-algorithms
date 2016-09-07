$(document).ready(function(){
  $("#simple").on("click", function(){
    measureTime(logArray);
  });
  $("#quadratic").on("click", function(){
    measureTime(twoNested);
  });
  $("#cubic").on("click", function(){
    measureTime(threeNested);
  });
  $("#quartic").on("click", function(){
    measureTime(fourNested);
  });
});

var arrayInts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function logArray(){
  for (var i = 0; i < arrayInts.length; i++) {
    console.log(arrayInts[i]);
  }
}

function twoNested(){
  for (var i = 0; i < arrayInts.length; i++) {
    console.log("set #", arrayInts[i]);
    logArray();
  }
}

function threeNested(){
  for (var i = 0; i < arrayInts.length; i++) {
    console.log("superset #", arrayInts[i]);
    twoNested();
  }
}

function fourNested(){
  for (var i = 0; i < arrayInts.length; i++) {
    console.log("superduperset #", arrayInts[i]);
    threeNested();
  }
}

function measureTime(func){
  var startFunc = console.time( func.name );
  func();
  var endFunc = console.timeEnd( func.name );
}
