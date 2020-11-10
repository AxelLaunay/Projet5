
//var urlString = window.location.href
//var url = new URL(urlString);
var cart = JSON.parse(localStorage.getItem('cart'));
var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var cameras = JSON.parse(this.responseText);
            console.log(cameras);
            var total = 0 
            cameras.forEach(camera => {
                
                //console.log(camera.name)
                
                cart.forEach(element=>{
                    if(element.objectID == camera._id){
                    console.log(element)

                    var container = document.getElementById("container");

                        var article = document.createElement("div");
                        article.className = "article"

                        
                        var imageUrl = document.createElement("img");
                        imageUrl.className = "imageCamera";
                        imageUrl.setAttribute ("src",camera.imageUrl);
                        article.appendChild(imageUrl);

                        var name = document.createElement("p");
                        name.className = "cameraName";
                        name.textContent = camera.name;
                        article.appendChild(name);
        
                        var lense = document.createElement("p");
                        lense.className = "lentilChoisi";
                        lense.textContent = " " + camera.lenses;
                        article.appendChild(lense);
        
                        var price = document.createElement("p");
                        price.className = "articlePrice";
                        price.textContent = " " + (camera.price) /100 +" €";
                        article.appendChild(price);

                        container.appendChild(article);

                        total = total + (camera.price / 100)
                        
                        var totalPrice = document.getElementById("totalPrice")
                        totalPrice.textContent = total + " €"

                        
                    
                }
                })
                
            });

        }
 }

    request.open ("GET" , "http://localhost:3000/api/cameras/");
    request.send();



var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom")
var age = document.getElementById("age")
var email = document.getElementById("email")
var email2 = document.getElementById("email2")
var adresse = document.getElementById("adresse")
var validation = document.getElementById("inscription")
var prenomNV = document.getElementById("prenomNV") //prenom non valide
var nomNV = document.getElementById("nomNV") // nom non valide
var emailNV = document.getElementById("emailNV") //email non valide
var email2NV = document.getElementById("email2NV") 
var adresseNV = document.getElementById("adresseNV")
var prenomNomV = /[a-zA-Zéèêëçàùîï]/ // validation du prenom et ddu nom
var ageV = /[0-9]/ //validation de l'age
var emailV = /[a-z0-9@.-]/ // validation email
var adresseV = /[a-zA-Z0-9]/ // validation adresse

validation.addEventListener("click", f_valid)

function f_valid(e){
if (prenomNomV.test(prenom.value) == false) {
    prenomNV.textContent = "la valeur n'est pas c'elle attendue"
    prenomNV.style.color = "red"
    e.preventDefault();
}
 if (prenomNomV.test(nom.value) == false) {
    nomNV.textContent = "la valeur n'est pas c'elle attendue"
    nomNV.style.color = "red"
    e.preventDefault();
}
 if (ageV.test(age.value) == false) {
    ageNV.textContent = "la valeur n'est pas c'elle attendue"
    ageNV.style.color = "red"
    e.preventDefault();
}
 if (emailV.test(email.value) == false) {
    emailNV.textContent = "la valeur n'est pas c'elle attendue"
    emailNV.style.color = "red"
    e.preventDefault();
}
 if (emailV.test(email2.value) == false) {
    email2NV.textContent = "la valeur n'est pas c'elle attendue"
    email2NV.style.color = "red"
    e.preventDefault();
}
 if (adresseV.test(adresse.value) == false) {
    adresseNV.textContent = "la valeur n'est pas c'elle attendue"
    adresseNV.style.color = "red"
    e.preventDefault();
}
} 
