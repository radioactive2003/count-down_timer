let setBtn = document.querySelector(".btn");
let form = document.querySelector(".form");
let timer = document.querySelector(".main");
let inp = document.querySelector("input");
 let date= document.querySelector('#date');//input date
let time= document.getElementById("time");//input time
let ds = document.querySelector("#days p");
let hrs = document.querySelector("#hours p");
let min = document.querySelector("#min p");
let sec = document.querySelector("#sec p");
let reqd =document.querySelector(".reqdate");
let reqt=document.querySelector(".reqtime");
let rstBtn = document.querySelector(".reset");
let title =  document.querySelector(".title");

// when set timer is clicked
setBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(date.value==""){//if empty then fill again
         
       reqd.style.display="inline";
       date.focus();
       setTimeout(()=>{
        reqd.style.display="none";
       },2000);
        
        return 
    }
    else if(time.value==""){
         reqt.style.display="inline";
         setTimeout(()=>{
            reqt.style.display="none";
         },2000);
        return
    }
    calculateTime();// for calculating time and display timer
    
})
// function to calculate time according to set date& time
function calculateTime(){
   
    const x = setInterval(function() {
        const inpDate = new Date(`${date.value} ${time.value}`).getTime();//getting user set date and time
         const curTime = new Date().getTime();//current date and time
         //if user date is already passed
        if (inpDate<curTime){
         title.textContent="This time is already passed";
        return
             }
             
         //showing the timer interface
        form.classList.add("disable");
        timer.classList.remove("disable");
        title.textContent="Time Left"
       
        const difference = inpDate - curTime;

        if (difference < 0) {
            clearInterval(x);
            document.querySelector(".title").textContent="Times up!";    
        }
        //calculating the timer  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        ds.textContent=days;
        hrs.textContent=hours;
        min.textContent=minutes;
        sec.textContent=seconds;

    }, 1000);
}
// reseting the timer
rstBtn.addEventListener("click",()=>{
        document.location.reload();
   
})
