//page article
//Creation et chargemetn d'element parge article 

var urlString = window.location.href
var url = new URL(urlString);
var id = url.searchParams.get("id");
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var camera = JSON.parse(this.responseText);
            console.log(camera);

            var paramSection = document.getElementById("parametre")
            var tableauRadio = [] 
            for(var i = 0 ; i<camera.lenses.length ; i++ ){
                var lense = camera.lenses[i]

                var pParam = document.createElement("p");
                pParam.setAttribute("id","pParam")
                pParam.className = "paramChoix_"+i;
                pParam.textContent = lense;

                var paramRadio = document.createElement("input");
                paramRadio.setAttribute ("type", "radio");
                paramRadio.setAttribute("name", "choix");
                paramRadio.setAttribute("value" , "choix_1");
                paramSection.appendChild(pParam);
                pParam.appendChild(paramRadio);
                tableauRadio.push(paramRadio)
            }
            var ajoutPannier = document.getElementById("ajoutPannier");
            ajoutPannier.addEventListener("click" , function(){
                var url = "pagePannier.html?id=" +id
                var didFound = false
                tableauRadio.forEach((bouton, index) =>{
                    if (bouton.checked) {
                        url  += "lense=" + index;
                        window.location.replace(url)
                        didFound = true
                        return
                    }
                })
                if(!didFound){
                    alert("ya r")
                }
               
            })

            var positionIMG = document.getElementById("positionIMG");
            var imageUrl = document.createElement("img");
            imageUrl.className = "imageCamera";
            imageUrl.setAttribute ("src",camera.imageUrl);
            positionIMG.appendChild(imageUrl);

            var positionName = document.getElementById("positionName");
            var name = document.createElement("p");
            name.className = "cameraName";
            name.textContent = camera.name;
            positionName.appendChild(name);

            var description = document.createElement("p");
            description.className = "articleDescription";
            description.textContent = " " + camera.description;
            positionName.appendChild(description);

            var price = document.createElement("p");
            price.className = "articlePrice";
            price.textContent = " " + (camera.price) /100 +" €";
            positionName.appendChild(price);


        }
    }

    request.open ("GET" , "http://localhost:3000/api/cameras/" + id);
    request.send();