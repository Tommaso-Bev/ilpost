let burger=document.getElementsByClassName("checkbttn");
let p=false;
let sidebar=document.getElementsByClassName("wrapper");
sidebar[0].style.display="none";
burger[0].addEventListener("click", f);
p=true;
function f(){
    if (p===false){
        sidebar[0].style.display="none";
        p=true;
    }
    else{
        sidebar[0].style.display="flex";
        p=false;
    }
}