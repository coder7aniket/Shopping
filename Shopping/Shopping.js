var mycart = [];

function Search()
{   
    let input = document.getElementById("Search").value.toLowerCase();
    let ul = document.getElementById("main");
    let li = document.getElementsByClassName("card");
    var i;
    for(i=0;i<li.length;i++)
    {   var product=document.getElementsByTagName("h1")[i];
        
        if(product.innerText.toLowerCase().indexOf(input)> -1)
        {
            li[i].style.display=" ";
        }
        else
        {
            li[i].style.display="None";
        }
    }      
}

function addcart( a)
{ 
    var  temp =document.getElementById(a);
    mycart.push(temp);
}


console.log(mycart);
     

























