window.addEventListener("load",function(){

    if(!localStorage.getItem("name") || !localStorage.getItem("unvan")){
        localStorage.clear();
        window.open("./login.html","_parent");
    }


    const range=document.querySelector("#range");

    let max=localStorage.getItem("max").split("#").reverse();

    let temp="";
    range.innerHTML=temp;

    for(let i=0;i<max.length;i++){

        let v=JSON.parse(max[i]);
        let t=new Date(v.time);
        t=`${t.getDate()}.${t.getMonth()}.${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
        temp+=`
        <li>
        <b>#${i+1}</b> XAL: ${v.val} - TARIX: ${t}
        </li>
        `;

    }

    range.innerHTML=temp;
  
});