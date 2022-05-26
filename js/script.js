'use strict';

function addIngredient() {
    const newIngredient = document.createElement("div");

    newIngredient.innerHTML = `
        <div class="ingredient">
            <label for="">
                <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
            </label>
            <input type="text" name="ingredient" id="ingredient" placeholder="ingredient here">
            <div>
                <input type="button" id="remove" name="remove" onclick="this.parentElement.parentElement.parentElement.remove();">
                <label for="remove">
                    <img class="remove" src="images/svg/xmark-solid.svg" alt="remove">
                </label>
            </div>
        </div>
    `

    document.getElementById("ingredients").appendChild(newIngredient);
}

function addUtensil() {
    const newUtensil = document.createElement("div");

    newUtensil.innerHTML = `
        <div class="utensil">
            <label for="">
                <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
            </label>
            <input type="text" name="utensil" id="utensil" placeholder="ingredient here">
            <div>
                <input type="button" id="remove" name="remove" onclick="this.parentElement.parentElement.parentElement.remove();">
                <label for="remove">
                    <img class="remove" src="images/svg/xmark-solid.svg" alt="remove">
                </label>
            </div>
        </div>
    `

    document.getElementById("utensils").appendChild(newUtensil);
}


function changeSteps(_this) {
    const ItemCount = +_this.value //get the value
    const steps = document.querySelector('#steps') //append results
    steps.innerHTML = '' //clear the results on each update
    for (var i = 1; i <= ItemCount; i++) {
        const newStep = document.createElement("div");
        // var input = document.createElement('input') //create input
        // var label = document.createElement("label"); //create label
        // label.innerText = 'Input ' + i
        // input.type = "text";
        // input.placeholder = "Type text here"; //add a placeholder
        // input.className = "my-inputs"; // set the CSS class
        // results.appendChild(label); //append label
        // results.appendChild(document.createElement("br"));
        // results.appendChild(input); //append input
        // results.appendChild(document.createElement("br"));

        newStep.innerHTML = `
        <div>
            <div class="step">
                <output for="">1</output>
                <label for="">
                    <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
                </label>
                <input type="text" name="stepText" id="stepText" placeholder="ingredient here">
                <div>
                    <input type="button" id="remove" name="remove" onclick="this.parentElement.parentElement.parentElement.remove();">
                    <label for="remove">
                        <img class="remove" src="images/svg/xmark-solid.svg" alt="remove">
                    </label>
                </div>
            </div>
            <label for="fileUpload">
                <img src="images/svg/image-solid.svg" alt="upload">
            </label>
            <input id="fileUpload" name="fileUpload" type="file">
        </div>
        `

        document.getElementById("steps").appendChild(newStep);
    }
}

function addTag() {
    const newTag = document.createElement("div");
    const tagText = document.getElementById("tag").value;

    newTag.innerHTML = `
        <output onclick="this.parentElement.remove();">${tagText}</output>
    `

    document.getElementById("tagList").appendChild(newTag);

}

// const tagList = document.querySelector('#tagList');

// tagList.addEventListener('click', function(e) {
//     this.removeChild(e.target);
// })

// const inputTag = document.getElementById("tag");
// inputTag.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("tagButton").click();
//     }
// });



