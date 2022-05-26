'use strict';

let counterIngredient = 0;
let counterUtensil = 0;
let counterStep = 0;
let counterTag = 0;

function addIngredient() {
    const newIngredient = document.createElement("div");
    counterIngredient = counterIngredient+1;
    const id = "ingredient"+counterIngredient;

    newIngredient.setAttribute("id",id);
    newIngredient.classList.add("ingredient");

    newIngredient.innerHTML = `
        <label>
            <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
        </label>
        <input type="text" name="ingredient" id="ingredient" placeholder="ingredient here">
        <div>
            <input type="button" class="removeHidden" id="removeIngredient${counterIngredient}" name="remove" onclick="removeIngredient('${id}');">
            <label for="removeIngredient${counterIngredient}">
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
    counterUtensil = counterUtensil+1;
    const id = "utensil"+counterUtensil;

    newUtensil.setAttribute("id",id);
    newUtensil.classList.add("utensil");

    newUtensil.innerHTML = `
        <label>
            <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
        </label>
        <input type="text" name="utensil" id="utensil" placeholder="utensil here">
        <div>
            <input type="button" class="removeHidden" id="removeUtensil${counterUtensil}" name="remove" onclick="removeUtensil('${id}');">
            <label for="removeUtensil${counterUtensil}">
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
        counterStep = counterStep+1;
        const id = "step"+counterStep;

        newStep.setAttribute("id",id);

        newStep.innerHTML = `
        <div class="step">
            <p>${i}</p>
            <label>
                <img class="bars" src="images/svg/bars-solid.svg" alt="bars">
            </label>
            <input type="text" name="stepText" id="stepText" placeholder="step here">
            <div>
                <input type="button" class="removeHidden" id="removeStep${counterStep}" name="remove" onclick="removeStep('${id}');">
                <label for="removeStep${counterStep}">
                    <img class="remove" src="images/svg/xmark-solid.svg" alt="remove">
                </label>
            </div>
        </div>
        <label for="fileUpload">
            <img class="imgStep" src="images/svg/image-solid.svg" alt="upload">
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
    newTag.classList.add("tag");
    counterTag = counterTag+1;
    const id = "tag"+counterTag;
    newTag.setAttribute("id", id);
    const tagText = document.getElementById("tag").value;

    newTag.innerHTML = `
        <output onclick="removeTag('${id}');">${tagText}</output>
    `
    document.getElementById("tagList").appendChild(newTag);
}

function removeTag(tag) {
    console.log(event.target);
    document.querySelector("#"+tag).remove();
}



