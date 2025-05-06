


document.getElementById("btn").addEventListener("click", () => {

    const Tag_name = document.getElementById('Input_Name_Tag').value;

    const Text = document.getElementById('Input_Name').value;

    const Div = document.getElementById('div-arr');

    
    if (Tag_name != 'br') {
        
        const new_tag = document.createElement(`${Tag_name}`);

        // add class
        new_tag.classList.add('child')

        new_tag.innerText = `${Tag_name} : ${Text}`;
        Div.appendChild(new_tag);
        
    }


    document.getElementById('Input_Name').value = "";
    document.getElementById('Input_Name_Tag').value = "";


    const all_child = document.getElementsByClassName("child");

    for( const element of all_child) {

        element.addEventListener("click", (e) => {

            // console.log(e.target);
            // console.log(e.target.parentNode);

            e.target.parentNode.removeChild(element);

        });

    }
  

});




//