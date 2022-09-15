const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("Please enter weight: "));
let planet = Number(prompt("Please enter planet number: "));

if (planet === 1){
    console.log (weight * 0.78);
} else if(planet === 2){
    console.log (weight * 0.39);
} else if(planet === 3){
    console.log (weight * 2.65);
} else if(planet === 4){
    console.log (weight * 1.17);
} else if(planet === 5){
     console.log (weight * 1.05);
} else if(planet === 6){
    console.log (weight * 1.23);
}


