var urlString = window.location.href;
var url = new URL(urlString);
var nom = url.searchParams.get("nom")
var prenom = url.searchParams.get("prenom")
var adresse = url.searchParams.get("adresse")
var ville = url.searchParams.get("ville")
var email = url.searchParams.get("email")
var price = url.searchParams.get("totalPrice")

var nombis = document.getElementById("nom")


nombis.textContent = nom

var prix = document.getElementById("prix")

prix.textContent = price

var cart = JSON.parse(localStorage.getItem('cart'));

var magasin = document.getElementById("magasin")

var suprimPannier = addEventListener("click", s_suppr )

function s_suppr(e) {
    localStorage.clear();
}

var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        console.log(this)
        if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {


        var response = JSON.parse(this.responseText)
        var idCommande = response.orderId

        var identifiant = document.getElementById("identifiant")
        identifiant.textContent = idCommande
    }
}
    request.open ("POST" , "http://localhost:3000/api/cameras/order");
    var body = {
        contact:  {

        firstName : prenom ,
        lastName : nom,
        address: adresse,
        city: ville,
        email: email

    },
    products: cart.map(x => x.objectID)
}

   //JSON.stringify(body)
    request.setRequestHeader("Content-Type", "application/json")
    console.log(body)
    request.send(JSON.stringify(body))
