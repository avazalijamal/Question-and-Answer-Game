window.addEventListener("load",function(){

    const name=this.document.querySelector("#name");
    const max=this.document.querySelector("#max");
    const timer=this.document.querySelector("#timer");
    const heart=this.document.querySelector("#heart");
    const score=this.document.querySelector("#score");
    const count=this.document.querySelector("#count");
    const ques=this.document.querySelector("#ques");

    const variantA=this.document.querySelector("#variant-a");
    const variantB=this.document.querySelector("#variant-b");
    const variantC=this.document.querySelector("#variant-c");
    const variantD=this.document.querySelector("#variant-d");

    const variantAp=this.document.querySelector("#variant-a p");
    const variantBp=this.document.querySelector("#variant-b p");
    const variantCp=this.document.querySelector("#variant-c p");
    const variantDp=this.document.querySelector("#variant-d p");

    const result=this.document.querySelector("#result");
    const blur=this.document.querySelector("#blur");
    
    const resCount=this.document.querySelector("#resCount");
    const resScore=this.document.querySelector("#resScore");
    const resRecord=this.document.querySelector("#resRecord");
    const resError=this.document.querySelector("#resError");
    
    const home=this.document.querySelector("#home");
    const play=this.document.querySelector("#play");
    const rang=this.document.querySelector("#rang");
    
    
    


    const h=`<img src="./img/heart.png">`;
    var T=30;
    var c=0;
    var err=0;
    var game=_QUES_[c];
    var delay=1000;
    var interval;



    if(!localStorage.name) localStorage.setItem("name",prompt("Adinizi yazin"));
    if(!localStorage.max) localStorage.setItem("max",`{"val":0,"time":${(new Date).getTime()}}`);
    if(!localStorage.score) localStorage.setItem("score",0);
    if(!localStorage.heart) localStorage.setItem("heart",3);

    name.innerText=localStorage.name
    
    max.innerText=MaxConvertor()[0].val;
    timer.innerText=T;

    if(parseInt(localStorage.getItem("heart"))>0){
        for(let i=0;i<parseInt(localStorage.getItem("heart"));i++){
            heart.innerHTML+=h;
        }
    }else{
            heart.innerHTML=`<img src="./img/heart-2.png">`;
    }
    
    score.innerText=localStorage.score
    
   

    if(parseInt(localStorage.getItem("heart"))>0) Start();
    else window.open("./home.html","_parent");

    //start Game

    function Start(){

        newQues();

        variantA.addEventListener("click",function(){
            Next(variantA,variantAp);
            
        });
        variantB.addEventListener("click",function(){
            Next(variantB,variantBp);
            
        });
        variantC.addEventListener("click",function(){
            Next(variantC,variantCp);
            
        });
        variantD.addEventListener("click",function(){
            Next(variantD,variantDp);
            
        });

    }

    //next game
    function Next(dom,domP){

        window.clearInterval(interval);

        dom.classList.add("checked");

        res=domP.innerText;        

        window.setTimeout(function(){

            dom.classList.remove("checked");

            if(res==_VARIANT_[c]){
     
                dom.classList.add("success");

                window.setTimeout(function(){
                    
                    dom.classList.remove("success");

                    c++;
                    game=_QUES_[c];
        
                    newQues();
        
                    localStorage.score=parseInt(localStorage.score)+1;
                    score.innerText=localStorage.score;
                },delay);
    
            }else{
    
                dom.classList.add("error");
                err++;

                window.setTimeout(function(){

                    dom.classList.remove("error");

                    localStorage.heart=parseInt(localStorage.heart)-1;
    
                    if(parseInt(localStorage.heart)>0){
        
                        heart.innerHTML="";
                        for(let i=0;i<parseInt(localStorage.heart);i++) heart.innerHTML+=h;
        
                        c++;
                        game=_QUES_[c];
        
                        newQues();
        
                    }else{
                        blur.classList.add("blur");
                        result.classList.remove("hiden");
                        Result();

                    }
                },delay);
                
            }
    
        },delay);
    }

    //new quess
    function newQues(){
     
        count.innerText=(c+1);
        ques.innerText=game.ques;
        variantAp.innerText=game.a;
        variantBp.innerText=game.b;
        variantCp.innerText=game.c;
        variantDp.innerText=game.d;

        startTimer();
    }

    //max convertor
    
    function MaxConvertor(){
        let m=localStorage.getItem("max").split("#");

        for(let i=0;i<m.length;i++) m[i]=JSON.parse(m[i]);
        

        return m.reverse();
    }

    //result

    function Result(){

        if(parseInt(max.innerText) < parseInt(score.innerText)){
            max.innerText=score.innerText;

            let temp=localStorage.getItem("max");

            temp+=`#{"val":${max.innerText},"time":${(new Date).getTime()}}`

            localStorage.setItem("max",temp);
        }

        resCount.innerText=count.innerText;
        resError.innerText=err;
        resScore.innerText=score.innerText;
        resRecord.innerText=max.innerText;
    }

    home.addEventListener("click",function(){
        window.open("./home.html","_parent");
    }); 

    rang.addEventListener("click",function(){
        window.open("./range.html","_parent");
    });

    play.addEventListener("click",function(){
        localStorage.setItem("heart",3);
        localStorage.setItem("score",0);
        window.open("./index.html","_parent");
    });

    //start timer

    function startTimer(){
        window.clearInterval(interval);
        var t=T;

        interval=window.setInterval(function(){

            if(t>0){
                t--;
                timer.innerText=t;
            }else{
                window.clearInterval(interval);

                localStorage.heart=parseInt(localStorage.heart)-1;
    
                if(parseInt(localStorage.heart)>0){
    
                    heart.innerHTML="";
                    for(let i=0;i<parseInt(localStorage.heart);i++) heart.innerHTML+=h;
    
                    c++;
                    game=_QUES_[c];
                    err++;
    
                    newQues();
    
                }else{
                    blur.classList.add("blur");
                    result.classList.remove("hiden");
                    Result();

                }


            }

        },1000);

    }

});