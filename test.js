
//challenge 

const dataChecker = (string, rank) => {

    if (string ==="codenation" && rank === 1) {
        console.log(`the ${string} is a number ${rank}`)
    } else if (string ==="codenation" && rank !== 1) {
        console.log(`the ${string} is not a number ${rank}`)
    } else {
        console.log(`We do not have any data about this ${string} ${rank}`)
    }
};

dataChecker("codenation", 1 );