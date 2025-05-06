



const H1 = document.getElementById("print")
const H2 = document.getElementById("print1")
const Div = document.getElementById("box")


// Return Single object if we use getElementById
console.log(H1);    // h1#print
console.log(H2);    // h1#print1
console.log(Div);   // div#box.box




// Return Array of objects if ue use  getElementsByClassName
const H1_class = document.getElementsByClassName("H1")
const H2_class = document.getElementsByClassName("H1")
const Div_class = document.getElementsByClassName("box")

console.log(H1_class);    // HTMLCollection(2) [h1#print.H1, h1#print1.H1, print: h1#print.H1, print1: h1#print1.H1]
console.log(H2_class);    // HTMLCollection(2) [h1#print.H1, h1#print1.H1, print: h1#print.H1, print1: h1#print1.H1]
console.log(Div_class);   // HTMLCollection [div#box.box, box: div#box.box]





const H1_q = document.querySelector('h1')
console.log(H1_q) //  Return first founded object
// h1#print.H1


const H1_q_all = document.querySelectorAll('h1')
console.log(H1_q_all) //  Return all objects with tag h1
// NodeList(2) [h1#print.H1, h1#print1.H1]






//