window.addEventListener("load",function(){

    const ad=document.querySelector("#ad");
    const rekord=document.querySelector("#rekord");
    const can=document.querySelector("#can");
    const xal=document.querySelector("#xal");
    const say=document.querySelector("#say");
    const sual=document.querySelector("#sual");
    const v_a=document.querySelector("#v-a");
    const v_b=document.querySelector("#v-b");
    const v_c=document.querySelector("#v-c");
    const v_d=document.querySelector("#v-d");
   
    const urek='<img src="./img/heart.png" alt="">';

    var sualSayi=0;

if(!localStorage.getItem("ad")) localStorage.setItem("ad",prompt("adiniz yazin"));
if(!localStorage.getItem("rekord")) localStorage.setItem("rekord",0);
if(!localStorage.getItem("can")) localStorage.setItem("can",3);
if(!localStorage.getItem("xal")) localStorage.setItem("xal",0);

if(localStorage.getItem('can')==0){
    localStorage.setItem("can",3);
    localStorage.setItem("xal",0);
}

ad.innerText=localStorage.getItem("ad");
rekord.innerText=localStorage.getItem("rekord");
xal.innerText=localStorage.getItem("xal");

Can();

v_a.addEventListener("click",function(){
    let DOM=v_a;

    DOM.classList.add("select");

    window.setTimeout(function(){
        DOM.classList.remove("select");

        if(DOM.innerText==CAVABLAR[sualSayi]){
            DOM.classList.add("success");

            xal.innerText=parseInt(xal.innerText)+1;
            localStorage.setItem("xal",xal.innerText);

            window.setTimeout(function(){
                DOM.classList.remove("success");
                sualSayi++;
                Start(sualSayi);
            },1000);
            

        }else{
            DOM.classList.add("error");

            window.setTimeout(function(){
                DOM.classList.remove("error");
                let c=parseInt(localStorage.getItem("can"))-1;
                localStorage.setItem("can",c);

                if(c>0){
                    Can();
                }else{
                    Uduzdun();
                }


            },1000);

        }

    },1000);

});
v_b.addEventListener("click",function(){
    let DOM=v_b;

    DOM.classList.add("select");

    window.setTimeout(function(){
        DOM.classList.remove("select");

        if(DOM.innerText==CAVABLAR[sualSayi]){
            DOM.classList.add("success");

            xal.innerText=parseInt(xal.innerText)+1;
            localStorage.setItem("xal",xal.innerText);

            window.setTimeout(function(){
                DOM.classList.remove("success");
                sualSayi++;
                Start(sualSayi);
            },1000);
            

        }else{
            DOM.classList.add("error");

            window.setTimeout(function(){
                DOM.classList.remove("error");
                let c=parseInt(localStorage.getItem("can"))-1;
                localStorage.setItem("can",c);

                if(c>0){
                    Can();
                }else{
                    Uduzdun();
                }


            },1000);

        }

    },1000);

});
v_c.addEventListener("click",function(){
    let DOM=v_c;

    DOM.classList.add("select");

    window.setTimeout(function(){
        DOM.classList.remove("select");

        if(DOM.innerText==CAVABLAR[sualSayi]){
            DOM.classList.add("success");

            xal.innerText=parseInt(xal.innerText)+1;
            localStorage.setItem("xal",xal.innerText);

            window.setTimeout(function(){
                DOM.classList.remove("success");
                sualSayi++;
                Start(sualSayi);
            },1000);
            

        }else{
            DOM.classList.add("error");

            window.setTimeout(function(){
                DOM.classList.remove("error");
                let c=parseInt(localStorage.getItem("can"))-1;
                localStorage.setItem("can",c);

                if(c>0){
                    Can();
                }else{
                    Uduzdun();
                }


            },1000);

        }

    },1000);

});
v_d.addEventListener("click",function(){
    let DOM=v_d;

    DOM.classList.add("select");

    window.setTimeout(function(){
        DOM.classList.remove("select");

        if(DOM.innerText==CAVABLAR[sualSayi]){
            DOM.classList.add("success");

            xal.innerText=parseInt(xal.innerText)+1;
            localStorage.setItem("xal",xal.innerText);

            window.setTimeout(function(){
                DOM.classList.remove("success");
                sualSayi++;
                Start(sualSayi);
            },1000);
            

        }else{
            DOM.classList.add("error");

            window.setTimeout(function(){
                DOM.classList.remove("error");
                let c=parseInt(localStorage.getItem("can"))-1;
                localStorage.setItem("can",c);

                if(c>0){
                    Can();
                }else{
                    Uduzdun();
                }


            },1000);

        }

    },1000);

});

Start(sualSayi);


function Start(i){
    say.innerText=i+1;
    sual.innerText=SUALLAR[i].ques;
    v_a.innerText=SUALLAR[i].a;
    v_b.innerText=SUALLAR[i].b;
    v_c.innerText=SUALLAR[i].c;
    v_d.innerText=SUALLAR[i].d;
}


function Can(){
    can.innerHTML="";
for(let i=0;i<parseInt(localStorage.getItem("can"));i++){
    can.innerHTML+=urek;
}
}

function Uduzdun(){
    let c=window.confirm("Canin 0-a beraberdir: Yeniden oynamaq isdeyirsenmi ?");

        if(c){

            let r=parseInt(localStorage.getItem("rekord"));
            let x=parseInt(localStorage.getItem("xal"));

            if(x>r){
                localStorage.setItem("rekord",x);
                rekord.innerText=localStorage.getItem('rekord');
            }

            localStorage.setItem("xal",0);
            localStorage.setItem("can",3);
            xal.innerText=localStorage.getItem("xal");
            Can();
        }else{
            Uduzdun();
        }

}

});