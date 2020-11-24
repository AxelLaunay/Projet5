
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
                
                cart.forEach((element, index)=>{
                    if(element.objectID == camera._id){
                    console.log(element)

                    var container = document.getElementById("container");

                        var article = document.createElement("div");
                        article.className = "article"
                        article.id = index
                        console.log(index)
                        
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
                        lense.textContent = " " + camera.lenses[element.lense];
                        article.appendChild(lense);
        
                        var price = document.createElement("p");
                        price.className = "articlePrice";
                        price.textContent = " " + (camera.price) /100 +" €";
                        article.appendChild(price);

                        var supression = document.createElement("a")
                        var suprimer = document.createElement("i")
                        suprimer.className ="fas fa-times"
                        supression.appendChild(suprimer)
                        article.appendChild(supression);

                        supression.addEventListener("click" , s_valid)
                        function s_valid(){
                            cart.splice(index,1)
                            console.log(index)
                            localStorage.setItem('cart' , JSON.stringify(cart))
                            window.location.reload()
                        }
                  

                        container.appendChild(article);

                        total = total + (camera.price / 100)
                        
                        var totalPrice = document.getElementById("totalPrice")
                        totalPrice.textContent = total + " €"

                        var prix = document.getElementById("prix")
                        prix.value = total 

                        
                    
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
var adresse = document.getElementById("adresse")
var ville = document.getElementById("ville")
var validation = document.getElementById("inscription")
var prenomNV = document.getElementById("prenomNV") //prenom non valide
var nomNV = document.getElementById("nomNV") // nom non valide
var emailNV = document.getElementById("emailNV") //email non valide
var adresseNV = document.getElementById("adresseNV")
var villeNV = document.getElementById("villeNV")
var prenomNomV = /[a-zA-Zéèêëçàùîï]$/ // validation du prenom et ddu nom
var ageV = /^[0-9]*$/ //validation de l'age
var emailV = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ // validation email
var adresseV = /[a-zA-Z0-9]$/ // validation adresse

validation.addEventListener("click", f_valid)

function f_valid(e){
if (prenomNomV.test(prenom.value) == false) {
    e.preventDefault();
    prenomNV.textContent = "la valeur n'est pas c'elle attendue"
    prenomNV.style.color = "red"
    
}else{
    prenomNV.textContent = ""
}
 if (prenomNomV.test(nom.value) == false) {
    e.preventDefault();
    nomNV.textContent = "la valeur n'est pas c'elle attendue"
    nomNV.style.color = "red"
 }else{
     nomNV.textContent= ""
 }
 if (ageV.test(age.value) == false) {
    e.preventDefault()
    ageNV.textContent = "la valeur n'est pas c'elle attendue"
    ageNV.style.color = "red"
}else{
    ageNV.textContent = ""
}
 if (emailV.test(email.value) == false) {
    e.preventDefault();
    emailNV.textContent = "la valeur n'est pas c'elle attendue"
    emailNV.style.color = "red"
}else{
    emailNV.textContent = ""
}
if (adresseV.test(adresse.value) == false) {
    e.preventDefault();
    adresseNV.textContent = "la valeur n'est pas c'elle attendue"
    adresseNV.style.color = "red"
}else{
    adresseNV.textContent = ""
}
if(prenomNomV.test(ville.value) == false){
    e.preventDefault();
    villeNV.textContent = "la valeur n'est pas c'elle attendue"
    villeNV.style.color = "red"
}else{
    villeNV.textContent = " "
}
}