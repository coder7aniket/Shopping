var mycart = [];

function Search() {
    let input = document.getElementById("Search").value.toLowerCase();
    let ul = document.getElementById("main");
    let li = document.getElementsByClassName("card");
    var i;
    for (i = 0; i < li.length; i++) {
        var product = document.getElementsByTagName("h1")[i];

        if (product.innerText.toLowerCase().indexOf(input) > -1) {
            li[i].style.display = " ";
        }
        else {
            li[i].style.display = "None";
        }
    }
}

function addcart(a) {
    var temp = document.getElementById(a);
    mycart.push(temp);
}




//var ul1= document.querySelector("ul");

var close = document.getElementsByClassName("remove");

function createitem() {
    var ul = document.querySelector("#Firstul");
    for(j=0;j<mycart.length;j++)
{
    var li = document.createElement("li");
    li.className = "li_1";

    var button_1 = document.createElement("button");
    var txt_1 = document.createTextNode("Remove from cart");
    button_1.className = "remove";
    button_1.appendChild(txt_1);

    var input_1 = document.createElement("p");
    input_1.className = "input_1";

    input_1.appendChild(document.createTextNode(mycart[j].innerText));
    li.appendChild(input_1);
    
    li.appendChild(button_1);
    console.log(li);    

    ul.appendChild(li);
}
    for (i = 0; i < mycart.length; i++) {
        close[i].onclick = function () 
        {   
            delete1(i);
            this.parentElement.remove();
        }
    }

    
       function delete1(a)
        {  
            for(i=0;i<mycart.length;i++)
            {
            if(i == a)
            mycart.splice(i,1);
            }
        }
}



































