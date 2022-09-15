const prompt = require('prompt-sync')({sigint: true});

let dayNum = Number(prompt("Please enter a number from 1 through 7: "));

if (dayNum === 1){
    console.log("Monday")
} else if(dayNum === 2){
    console.log("Tuesday")
} else if(dayNum === 3){
    console.log("Wednesday")
} else if(dayNum === 4){
    console.log("Thursday")
} else if(dayNum === 5){
    console.log("Friday")
} else if(dayNum === 6){
    console.log("Saturday")
} else if(dayNum === 7){
    console.log("Sunday")
} else {
    console.log("error");    
}