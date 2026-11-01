// let mynumbers = [10,20,30,40,50];

// console.log(mynumbers);

// mynumbers =mynumbers.filter(n=>n >30);
// console.log(mynumbers);

// let item=mynumbers.find(n=>n===55);

// let copy=mynumbers.map(n=> n+1)
// console.log(copy)


// let numbers1=[10,20,30]
// let numbers2=[40,50,60,...numbers1]

// console.log(numbers1)
// console.log(numbers2)

// function main(){
    // let isOkay = confirm("are you older than 18?")
    // const body = document.getElementsByTagName("body")[0];
    // if(isOkay){
    //     alert("welcome")
    //     body.style.backgroundColor = "springgreen"
    // }
    // else{
    //     body.style.backgroundColor = "red"
    //     alert("Acess denied!")
    // }

    // let count = Number(prompt("Enter item count!"));
    
    // let content=" ";

    // for (let i=0; i<count; i++){
    //     content +=`<li>${i + 1}</li>`;
    // }

    // const list = document.getElementById("myList");
    // list.innerHTML = content;}

function showTimer(){
    const title = document.getElementById("title")
    let date = new Date()
    title.innerHTML=date.toLocaleTimeString();
}



// setInterval(() => {
    
// }, 1000);

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
var clear;
function Start(){
    startBtn.disabled=true;
    stopBtn.disabled=false;

    clear=setInterval(() => {
        showTimer()
    }, 1000);

}

function Stop(){
    startBtn.disabled=false;
    stopBtn.disabled=true;
  clearTimeout(clear)
}