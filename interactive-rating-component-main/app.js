

var numberofbtn = document.querySelectorAll("ul li").length; // output is 5.
var submit = document.querySelector('button')
var ratingState=document.querySelector('.ratingState')
var thankYouState=document.querySelector('.thankyoustate')


for(var i=0;i<numberofbtn;i++){
    var result = document.querySelectorAll("ul li")[i].addEventListener("click",onClick);
}

function onClick(){
   x=this.value;    
   console.log(x)
   this.style.backgroundColor = "hsl(217, 12%, 63%)";
   this.style.color="white";
}

submit.addEventListener("click", (e) => {
    console.log('clicked');
    ratingState.classList.toggle("hidden");
    thankYouState.classList.toggle("hidden");
    document.querySelector(".result").textContent = `You Selected ${x} out of 5`

}) 