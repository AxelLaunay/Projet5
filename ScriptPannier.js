
//var urlString = window.location.href
//var url = new URL(urlString);
var cart = JSON.parse(localStorage.getItem('cart'));
var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var cameras = JSON.parse(this.responseText);
            console.log(cameras);
            cameras.forEach(camera => {

                //console.log(camera.name)
                
                cart.forEach(element=>{
                    if(element.objectID == camera._id){
                    console.log(element)

                    var container = document.getElementById("container");
                        var name = document.createElement("p");
                        name.className = "cameraName";
                        name.textContent = camera.name;
                        container.appendChild(name);

                        
                        var imageUrl = document.createElement("img");
                        imageUrl.className = "imageCamera";
                        imageUrl.setAttribute ("src",camera.imageUrl);
                        container.appendChild(imageUrl);

                        var description = document.createElement("p");
                        description.className = "articleDescription";
                        description.textContent = " " + camera.description;
                        container.appendChild(description);
        
                        var lense = document.createElement("p");
                        lense.className = "lentilChoisi";
                        lense.textContent = " " + camera.lenses;
                        container.appendChild(lense);
        
                        var price = document.createElement("p");
                        price.className = "articlePrice";
                        price.textContent = " " + (camera.price) /100 +" €";
                        container.appendChild(price);

                        
                    
                }
                })

                /*

                var positionName = document.getElementById("positionName");
                var name = document.createElement("p");
                name.className = "cameraName";
                name.textContent = camera.name;
                positionName.appendChild(name);

                var positionParam = document.getElementById("positionParam")
                var description = document.createElement("p");
                description.className = "articleDescription";
                description.textContent = " " + camera.description;
                positionParam.appendChild(description);

                var lense = document.createElement("p");
                lense.className = "lentilChoisi";
                lense.textContent = " " + camera.lenses;
                positionParam.appendChild(lense);

                var formulaire = document.getElementById("formulaire");
                var price = document.createElement("p");
                price.className = "articlePrice";
                price.textContent = " " + (camera.price) /100 +" €";
                formulaire.appendChild(price);*/
                
            });

        }
 }

    request.open ("GET" , "http://localhost:3000/api/cameras/");
    request.send();