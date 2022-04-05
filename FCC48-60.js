function functionWithArgs(a, b) {
    console.log(a + b);
  
  }
  functionWithArgs(2, 3);


  function timesFive(num) {
    return num * 5;
  } 
  let answer = timesFive(3);


  let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();


let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();




let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);



function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}



function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false";
trueOrFalse(true);
trueOrFalse(false);
  // Only change code above this line

}


function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false";
trueOrFalse(true);
trueOrFalse(false);
  // Only change code above this line

}


function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);



function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");