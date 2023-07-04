const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");


//add event listener to button
function calculateAge(){
    //this const get the clicked date value
    const birthdayValue = birthdayEl.value;
    console.log(birthdayValue)
    //if the birthday value is empty create alert
    if(birthdayValue === ""){
        alert("Please enter your birthday")
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
}

//this func gets the current date and subtract the birth date
function getAge(birthdayValue){
    const currentDate = new Date()
    const birthdayDate = new Date (birthdayValue)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    console.log(age);
 const month = currentDate.getMonth() - birthdayDate.getMonth();
 console.log(month);

 //to prevent any problem if the birth month is the same with the current month
 if(month <0 || (month === 0 && currentDate.getDate()< birthdayDate.getDate())){
    age--
 }
 return age;
}

btnEl.addEventListener("click", calculateAge)
