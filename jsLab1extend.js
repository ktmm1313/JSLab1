let wage = 10;
let hours = 60;

let weeks = 0;
let sum = 0;
while (sum < 1000000) {

    if (hours >= 40) {
    weeks++;
    paycheck = (hours - 40) * (wage * 1.5) + (wage * 40);
    //console.log(weeks);
    sum = sum + paycheck;
} else {
    weeks++;    
    paycheck = wage * hours;
    //console.log(weeks);
    sum = sum + paycheck;
    break;
}
console.log(weeks);
}