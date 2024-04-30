window.addEventListener("load",function(){

    if(!localStorage.getItem("name") || !localStorage.getItem("unvan")){
        localStorage.clear();
        window.open("./login.html","_parent");
    }



    const ad=document.querySelector("#ad");
    const unvan=document.querySelector("#unvan");
    const can=document.querySelector("#can");
    const xal=document.querySelector("#xal");
    const recordXal=document.querySelector("#recordXal");
    const recordTarix=document.querySelector("#recordTarix");
    const play=document.querySelector("#play");
    const rang=document.querySelector("#rang");
    const info=document.querySelector("#info");

    ad.innerText=localStorage.getItem("name");
    unvan.innerText=localStorage.getItem("unvan");
    xal.innerText=localStorage.getItem("score");

    can.innerHTML="";

    if(parseInt(localStorage.getItem("heart"))>0){
        for(let i=0;i<parseInt(localStorage.getItem("heart"));i++){
            can.innerHTML+=`<img src="./img/heart.png">`;
        }
    }else{
            can.innerHTML=`<img src="./img/heart-2.png">`;
    }

    let record=localStorage.getItem("max").split("#").reverse();
    record=JSON.parse(record[0]);
    recordXal.innerText=record.val;

    let t=new Date(record.time);
    t=`${t.getDate()}.${t.getMonth()+1}.${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
    recordTarix.innerText=t;

    play.addEventListener("click",function(){

        if(parseInt(localStorage.getItem("heart"))>0){
            window.open("./index.html","_parent");
        }else{
            window.open("./shopp.html","_parent");
        }


    });
    rang.addEventListener("click",function(){
        window.open("./range.html","_parent");
    });
    info.addEventListener("click",function(){
        window.open("./info.html","_parent");
    });

});