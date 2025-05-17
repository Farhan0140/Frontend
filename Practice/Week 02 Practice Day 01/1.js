
let res = 45;

if(res < 0) {
    console.log("Failed");
} else if(res >= 0 && res < 40) {
    console.log("C");
} else if(res >= 40 && res < 60) {
    console.log("B");
} else if(res >= 60 && res < 70) {
    console.log("A-");
} else if(res >= 70 && res < 80) {
    console.log("A");
} else if(res >= 80 && res < 100) {
    console.log("A+");
} else {
    console.log("Invalid");
}
