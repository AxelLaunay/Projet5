// page acceuil
// chargement des tabeaux page acceuil

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var cameras = JSON.parse(this.responseText);
    console.log(cameras);
    cameras.forEach(camera => {
        console.log(camera.name)

     var container = document.getElementById("container");
        var article = document.createElement("a");
        article.setAttribute("href", "article.html?id="+camera._id)
        article.className = "article";

       var name = document.createElement("span");
        name.className = "articleName";
        name.textContent = camera.name;
        article.appendChild(name);

        var imageUrl = document.createElement("img");
        imageUrl.className = "articleImage";
        imageUrl.setAttribute ("src",camera.imageUrl);
        article.appendChild(imageUrl);

        var description = document.createElement("span");
        description.className = "articleDescription";
        description.textContent = " " + camera.description;
        article.appendChild(description);

        var price = document.createElement("span");
        price.className = "articlePrice";
        price.textContent = " " + (camera.price) /100 +" €";
        article.appendChild(price);

        container.appendChild(article);

    });
  }
};
request.open("GET", "http://localhost:3000/api/cameras");
request.send();



