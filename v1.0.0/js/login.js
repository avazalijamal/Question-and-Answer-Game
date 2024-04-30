window.addEventListener("load",function(){

    const name=document.querySelector("#name");
    const unvan=document.querySelector("#unvan");
    const submit=document.querySelector("#submit");

    if(localStorage.getItem("name") && localStorage.getItem("unvan")){
        window.open("./home.html","_parent");
    }


    submit.addEventListener("click",function(){

        let n=name.value.trim();
        let u=unvan.value.trim();

        if(n.length>=3){

            if(u.length>=3){

                localStorage.setItem("name",n);
                localStorage.setItem("unvan",u);
                
                localStorage.setItem("max",`{"val":0,"time":${(new Date).getTime()}}`);
                localStorage.setItem("score",0);
                localStorage.setItem("heart",3);

                window.open("./home.html","_parent");

            }else{
                alert("XAHIS EDIRIK UNVANI DUZGUN YAZIN")
            }

        }else{
            alert("XAHIS EDIRIK ADINIZI DUZGUN YAZIN");
        }


    });

});