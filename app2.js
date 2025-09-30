// function enter(hasKey, hasMagic, isBanned){
//     if((hasKey == true || hasMagic == true) && !isBanned) {
//         console.log("you're princess is in another castle");
//     } else {
//         console.log("cannot enter");
//     }
// }

// function enter(rideHeightOK, withAdult, healthHold) {
//   if ((rideHeightOK == true || withAdult == true) && !healthHold) {
//     console.log("You are allowed");
//   } else {
//     console.log("You are not allowed");
//   }
// }
// enter(true, false, false);

// function enter(doorOpen, windowOpen) {
//   const alarmSilent = !(doorOpen || windowOpen);
// }
// enter(true, false, false);

// function middle (x,y,z) {
//   if ((x >= y && x <= z) || (x <= y && x >= z)) {
//     console.log ("x is in the middle");
//   } else if ((y >= x && y>= z) || ())

// }

// function telemarketer(d1, d2, d3, d4) {
//   if ((d1 === 8 || d1 === 9) && (d4 === 8 || d4 === 9) && d2 === d3) {
//     console.log("ignore");
//   }
//   console.log("answer");
// }

// const students = ["Jean", "London", "Damian", "Thomas"];
// function printALL(list) {
//   for (let i = onabort; i < list.length; i++) {
//     console.log(i);
//     console.log(students[i]);
//   }
// }
// printALL(students);

// students.forEach((student) => console.log(student)); // use this only for typing all the students without using the function above

// const found = students.find((student) => student === "London");
// console.log(found);

const sentence =
  "The red cat sat on the mat. Why are you so sad cat? Don't ask that.";

function language(sentence) {
  let t = 0;
  let s = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "S" || sentence[i] === "s") {
      s = s + 1;
    } else if (sentence[i] === "T" || sentence[i] === "t") {
      t++;
    }
  }
  if (t > s) {
    console.log("English");
  } else {
    console.log("French");
  }
}
language(sentence);

// if (s && S < t && T) {
//   console.log("Probably English");
// }
// if (s && S === t && T) {
//   console.log("French");
// } else {
//   console.log("Probably French");
// }
