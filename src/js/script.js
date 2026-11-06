// TODO
aMettreEnRouge=document.querySelectorAll("#a-mettre-en-rouge")
aMettreEnRouge.style.color="red"
enRougeSuiteAClick=document.querySelector("#en-rouge-suite-q-click")
enRougeSuiteAClick.addEventListener("click",(evt)=>{
    enRougeSuiteAClick.style.color="red"
})
collH2=document.querySelector("h2")
collH2.forEach((elm)=>{
    elm.addEventListener("click",(evt)=>{
        evttarget.style.color="red";
    });
});

