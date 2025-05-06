

// const H1 = document.getElementById("print")
// const H2 = document.getElementById("print1")
// const Div = document.getElementById("box")


// H1.innerText = "Love u 💖"
// H2.innerText = "🤣"
// Div.innerHTML = "Box-1"
// Div.innerText = "Box-2"

// const H1_qq = document.querySelector('h1')
// H1_qq.style.color = 'green'




// _-----------------------------------------------------------------




const boxes = document.getElementsByClassName("box")

// console.log(boxes)  // Return Array

// boxes[0].style.backgroundColor = 'red'; // 
// boxes[0].innerHTML = "Box-1"
// boxes[0].style.color = "white"

// boxes[1].style.backgroundColor = 'green'; // 
// boxes[1].innerHTML = "Box-2"
// boxes[1].style.color = "black"


for(let i=0; i<boxes.length; i++) {

    const element = boxes[i];
    new_name = `box-${i + 1}`

    element.innerHTML = new_name
    element.style.color = 'black' 
    
    if(i+1 & 1) {   // Odd
        
        element.style.backgroundColor = 'rgb(127, 231, 231)' 
        
    } else {
        
        element.style.backgroundColor = 'rgb(231, 143, 127)'

    }

}

for(let i=0; i<boxes.length; i++) {

    const element = boxes[i];
    
    if(element.innerText == "box-8") {  
        
        element.style.backgroundColor = 'rgb(85, 228, 106)' 
        
    }

    if(element.innerText == "box-1") {  
        
        element.style.backgroundColor = 'rgb(85, 228, 106)' 
        
    }

}
