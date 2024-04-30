window.addEventListener("load",function(){

    if(!localStorage.getItem("name") || !localStorage.getItem("unvan")){
        localStorage.clear();
        window.open("./login.html","_parent");
    }


   
});