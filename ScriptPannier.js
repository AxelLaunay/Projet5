//validation des champ du formulaire 
var inscription = document.getElementById("inscription");
var prenom = document.getElementById("Prenom");
var prenomNull = document.getElementById("prenomNull");
var prenomValidation = /^[a-zA-Zéèîï] [a-zéèêàçîï] + ([-'\s] [a-zA-Zéèîï] [a-zéèêàçîï] +)?/;
inscription.addEventListener('click',f_valid);

function f_valid(e){
    console.log(e)
    if (prenom.validity.valueMissing){
        e.preventDefault();
        prenomNull.textContent = "Prenom manquant";
        prenomNull.style.color = "red";
    }else if (prenomValidation.test(prenom.value) == false) {
        event.preventDefault();
        prenomNull.textContent = 'format incorrect';
        prenomNull.style.color = 'red';
    }else{

    }
}