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
    }else{
        const age = getAge(birthdayValue)
    }
}

//this func gets the current date and subtract the birth date
function getAge(birthdayValue){
    const currentDate = new Date()
    const birthdayDate = new Date (birthdayValue)
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    console.log(age);

}

btnEl.addEventListener("click", calculateAge)
