let wage = 12;
let hours = 60;

let weeks = 0;
while (paycheck < 1000000) {

if (hours >= 40) {
    week++;
    paycheck = (hours - 40) * (wage * 1.5) + (wage * 40);
    console.log(paycheck);

} else {
    week++;
    paycheck = wage * hours;
    console.log(paycheck);
}

}