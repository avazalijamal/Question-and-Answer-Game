window.addEventListener("load",function(){

    if(!localStorage.getItem("name") || !localStorage.getItem("unvan")){
        localStorage.clear();
        window.open("./login.html","_parent");
    }


    const shop_1=document.querySelector("#shop-1");
    const shop_2=document.querySelector("#shop-2");
    const shop_3=document.querySelector("#shop-3");
   
    shop_1.addEventListener("click",function(){

        if(parseInt(localStorage.getItem("heart"))<5){
            let h=parseInt(localStorage.getItem("heart"))+1;
            localStorage.setItem("heart",h);
        }else{
            alert("CAN SAYINIZ MAKSIMAL HEDDEDIR");
        }

    });

    shop_2.addEventListener("click",function(){

        if(parseInt(localStorage.getItem("heart"))<4){
            let h=parseInt(localStorage.getItem("heart"))+2;
            localStorage.setItem("heart",h);
        }else{
            alert("CAN SAYINIZ MAKSIMAL HEDDEDIR DAHA ASAQI PAKETLERI YOXLAYIN");
        }

    });

    shop_3.addEventListener("click",function(){

        if(parseInt(localStorage.getItem("heart"))<3){
            let h=parseInt(localStorage.getItem("heart"))+3;
            localStorage.setItem("heart",h);
        }else{
            alert("CAN SAYINIZ MAKSIMAL HEDDEDIR DAHA ASAQI PAKETLERI YOXLAYIN");
        }

    });

});