
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m")
        .then(response => response.json())
        .then(data => {
            display(data.drinks);
        })
        .catch(Error => {

            console.log(Error);
            
        });
})


document.getElementById("s_btn").addEventListener("click", () => {
    const s = document.getElementById("s_input").value;
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${s}`)
        .then(response => response.json())
        .then(data => {

            display(data.drinks)
            
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

    if(products == null) {

        nft.innerHTML = "";
        const H1 = document.createElement('h1');
        H1.style.display = "inline";
        H1.innerText = "Product Not Found!!!"
        nft.appendChild(H1);

    } else {

        nft.innerHTML = "";

        products.forEach(product => {

            const div = document.createElement("div");
            div.classList.add("col");

            let Instruction = product.strInstructions;

            if(Instruction.length > 6) {
                const s = Instruction.substring(0, 15) + "...";
                Instruction = `<p>Instruction: ${s}</p>`;
            }

            div.innerHTML = `
                <div class="modal fade" id="exampleModal${product.idDrink}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">${product.strDrink}</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${product.strDrinkThumb}" class="card-img-top w-3 IMG" alt="...">
                            <h5 class="mt-4">Details</h5>
                            <p class="card-title">Category: <spain class="fw-bold">${product.strCategory}</spain></p>
                            <p>Alcoholic: <spain class="fw-bold">${product.strAlcoholic}</spain></p>
                            <p>Alcoholic: ${product.strInstructions}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="card h-100">
                    <img src="${product.strDrinkThumb}" class="card-img-top IMG" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${product.strDrink}</h4>
                        <p class="card-title">Category: <spain class="fw-bold">${product.strCategory}</spain></p>
                        ${Instruction}
                        <button id="btn-${product.idDrink}" type="button" class="btn btn-outline-secondary" onclick="add_to_cart(${product.idDrink})">Add to cart</button>
                        <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal${product.idDrink}">Details</button>
                    </div>
                </div>
            `;

            card.appendChild(div);
        });
    }
}

let p_cnt = 0;


const add_to_cart = (id) => {
    p_cnt++;
    const Cart = document.getElementById("cart-container");
    const cart_cnt = document.getElementById("CNT");

    if(p_cnt >= 8) {
        alert("You Have Reached The Max Limit");
        return;
    }

    cart_cnt.innerText = p_cnt;

    const BTN = document.getElementById(`btn-${id}`);
    BTN.innerText = "Already Carted";
    BTN.className = "btn btn-outline-danger";
    BTN.disabled = true;
    
    

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            
            data.drinks.forEach(d => {
                const Div = document.createElement('div');
                Div.classList.add('cart-lists');

                Div.innerHTML = `
                    <div class="p-details">
                        <p>${p_cnt}</p>
                        <img src="${d.strDrinkThumb}">
                        <div class="c-p-name">
                            <h5>${d.strDrink}</h5>
                        </div>
                    </div>
                `

                Cart.appendChild(Div);
            })
            

        })
        .catch(Error => {

            console.log(Error);
            
        });
}
