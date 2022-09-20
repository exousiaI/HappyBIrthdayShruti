let matchText='guk_9319358714';
let pasword= document.getElementById('pswd');
let btn = document.getElementById('btn');
let first = ()=>{
if(pasword.value.toLowerCase() == matchText){
    window.location.href='middle.html';
}else{
 alert('Invalid Password');   
}
}
// btn.addEventListener('click',first());
// window.onload = () =>{
//     document.getElementById('audi').play();
// }
let inpt = document.querySelector('#chk');
let audi = document.querySelector('#audi');
inpt.addEventListener('click',()=>{
    if(inpt.checked){
        audi.play();
    }else{
        audi.pause()
    }
    // console.log('clk')
})

function myFunction(){
    alert('⚠ Warning! Please watch this alone!');
    document.getElementById('pro').style.display ='block';
}
window.onload = audi.play();
// window.onreload