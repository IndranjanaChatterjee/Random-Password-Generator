const input=document.getElementById("txt");
const icon=document.getElementById("icon");
const range=document.getElementById("range");
const num=document.querySelector(".num");
const btn=document.getElementById("submit");
let password="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()><?+-*";
btn.addEventListener("click",()=>
{
    getpassword();
})
range.addEventListener("input",()=>
{
    let r=range.value;
    num.innerHTML=r;
    getpassword();
})
function getpassword()
{
    let r=range.value;
    let i;
    let p="";
    for(i=0;i<r;i++)
    {
        p=p+password[Math.floor(Math.random()*password.length)];
        
    }
    input.value=p;
}
icon.addEventListener("click",()=>
{
    input.select();
    document.execCommand("copy");
})
