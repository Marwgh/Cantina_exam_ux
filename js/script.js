'use strict';

function addIngredient() {
    const newIngredient = document.createElement("div");

    newIngredient.innerHTML = `
        <div class="ingredient">
            <label for="">
                <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
            </label>
            <input type="text" name="ingredient" id="ingredient" placeholder="ingredient here">
            <label for="">
                <img class="cross" src="images/svg/xmark-solid.svg" alt="cross">
            </label>
        </div>
    `

    document.getElementById("ingredients").appendChild(newIngredient);
}