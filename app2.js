function enter(hasKey, hasMagic, isBanned){
    if((hasKey == true || hasMagic == true) && !isBanned) {
        console.log("you're princess is in another castle");
    } else {
        console.log("cannot enter");
    }
}

enter(true, false, false);