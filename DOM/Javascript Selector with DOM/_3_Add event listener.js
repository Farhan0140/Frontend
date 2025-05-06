

// document.getElementById("btn").addEventListener("click", () => {

//     console.log('Button Clicked')

// });








const Function = () => {

    const Name = document.getElementById('Input_Name').value;
    document.getElementById('print').innerText = `Hello! ${Name}`;

}

document.getElementById("btn").addEventListener("click", Function);


document.getElementById('btn-red').addEventListener('click', (event) => {
    document.getElementById('print').style.color = 'red';
});

document.getElementById('btn-green').addEventListener('click', () => {
    document.getElementById('print').style.color = 'rgb(0, 255, 0)';
});

document.getElementById('btn-blue').addEventListener('click', () => {
    document.getElementById('print').style.color = 'blue';
});








// document.getElementById("btn").addEventListener("click", () => {

//     const Name = document.getElementById('Input_Name').value;
//     document.getElementById('print').innerText = `Hello! ${Name}`;

// });





