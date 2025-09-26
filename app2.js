// function enter(hasKey, hasMagic, isBanned){
//     if((hasKey == true || hasMagic == true) && !isBanned) {
//         console.log("you're princess is in another castle");
//     } else {
//         console.log("cannot enter");
//     }
// }

function enter(rideHeightOK, withAdult, healthHold) {
  if ((rideHeightOK == true || withAdult == true) && !healthHold) {
    console.log("You are allowed");
  } else {
    console.log("You are not allowed");
  }
}
enter(true, false, false);
