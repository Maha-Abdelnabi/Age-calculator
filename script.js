const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");


//add event listener to button
function calculateAge(){
    //this const get the clicked date value
    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue)
    //if the birthday value is empty create alert
    if(birthdayValue === ""){
        alert("Please enter your birthday")
    }
}



btnEl.addEventListener("click", calculateAge)
