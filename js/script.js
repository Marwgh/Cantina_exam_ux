'use strict';

function addIngredient() {
    const newIngredient = document.createElement("div");
    let counter = 0;
    counter = counter+1;
    const id = "ingredient"+counter;

    newIngredient.setAttribute("id",id);
    newIngredient.classList.add("ingredient");

    newIngredient.innerHTML = `
        <label for="">
            <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
        </label>
        <input type="text" name="ingredient" id="ingredient" placeholder="ingredient here">
        <div>
            <input type="button" class="removeHidden" id="removeIngredient${counter}" name="remove" onclick="removeIngredient('${id}');">
            <label for="removeIngredient${counter}">
                <img class="remove" src="images/svg/xmark-solid.svg" alt="remove">
            </label>
        </div>
    `

    document.getElementById("ingredients").appendChild(newIngredient);
}

function removeIngredient(ingredient) {
    console.log(event.target);
    document.querySelector("#"+ingredient).remove();
}

function addUtensil() {
    const newUtensil = document.createElement("div");
    let counter = 0;
    counter = counter+1;
    const id = "utensil"+counter;

    newUtensil.setAttribute("id",id);
    newUtensil.classList.add("utensil");

    newUtensil.innerHTML = `
        <label for="">
            <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
        </label>
        <input type="text" name="utensil" id="utensil" placeholder="utensil here">
        <div>
            <input type="button" class="removeHidden" id="removeUtensil${counter}" name="remove" onclick="removeUtensil('${id}');">
            <label for="removeUtensil${counter}">
                <img class="remove" src="images/svg/xmark-solid.svg" alt="remove">
            </label>
        </div>
    `

    document.getElementById("utensils").appendChild(newUtensil);
}

function removeUtensil(utensil) {
    console.log(event.target);
    document.querySelector("#"+utensil).remove();
}


function changeSteps(_this) {
    const stepCount = +_this.value
    const steps = document.querySelector('#steps')
    steps.innerHTML = ''
    for (let i = 1; i <= stepCount; i++) {
        const newStep = document.createElement("div");
        let counter = 0;
        counter = counter+1;
        const id = "step"+counter;

        newStep.setAttribute("id",id);

        newStep.innerHTML = `
        <div class="step">
            <label for="">${i}</label>
            <label for="">
                <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
            </label>
            <input type="text" name="stepText" id="stepText" placeholder="step here">
            <div>
                <input type="button" class="removeHidden" id="removeStep${counter}" name="remove" onclick="removeStep('${id}');">
                <label for="removeStep${counter}">
                    <img class="remove" src="images/svg/xmark-solid.svg" alt="remove">
                </label>
            </div>
        </div>
        <label for="fileUpload">
            <img src="images/svg/image-solid.svg" alt="upload">
        </label>
        <input id="fileUpload" name="fileUpload" type="file">
        `

        document.getElementById("steps").appendChild(newStep);
    }
}

function removeStep(step) {
    console.log(event.target);
    document.querySelector("#"+step).remove();
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


