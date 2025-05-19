
document.getElementById("s_btn").addEventListener("click", () => {
    const s = document.getElementById("s_input").value;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`)
        .then(response => response.json())
        .then(data => {

            display(data.meals)
            
        })
        .catch(Error => {

            console.log(Error);
            
        });
        
        
        document.getElementById("s_input").value = "";
})
    
    
const display = (products) => {
    const card = document.getElementById("show-products");
    card.innerHTML = "";
    const nft = document.getElementById("not-found");
    const details = document.getElementById("details");

    if(products == null) {

        details.innerHTML = "";
        const H1 = document.createElement('h1');
        H1.style.display = "inline";
        H1.innerText = "Product Not Found!!!"
        nft.appendChild(H1);

    } else {

        nft.innerHTML = "";
        details.innerHTML = "";

        products.forEach(product => {

            const div = document.createElement("div");
            div.classList.add("col");

            div.innerHTML = `
                <div class="card h-100">
                    <img src="${product.strMealThumb}" class="card-img-top IMG" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${product.strMeal}</h4>
                    </div>
                </div>
            `;


            div.addEventListener("click", () => {
                window.scrollTo(0, 0);

                const card = document.createElement('div');
                card.classList.add("card");
                card.style.width = "18rem";


                let lists = "";

                for(let i=1; i<=20; i++) {
                    const s = product[`strIngredient${i}`];
                    if(s != null && s.length > 0) {
                        lists += `<li> ${s} </li>`;
                    }
                }

                card.innerHTML = `
                    <img src="${product.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${product.strMeal}</h3>
                        <ul class="Ingredient">
                            ${lists}
                        </ul>
                    </div>
                `;

                
                while(details.hasChildNodes()) {
                    details.removeChild(details.firstChild)
                }

                details.appendChild(card);
            })

            card.appendChild(div);
        });
    }

    

}

