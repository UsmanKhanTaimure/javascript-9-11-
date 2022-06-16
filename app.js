// Chapter 9to11;


// Question1
// var city = prompt("Enter Your City Name");
// if(city === "karachi" || city ==="Karachi"){
//     alert("Welcome to city of lights")
// }


// Question2
// var gender = prompt("Enter Your gender");
// if(gender === "male" || gender === "Male"){
// alert("Good Morning Sir")
// }else if (gender === "female" || gender === "Female"){
//     alert("Good Morning Mam")
// }else{
//     alert("Sorry Your Not Humans")
// }


// Question3
// var signal = prompt("Enter Your Traffic Signal Light")
// if (signal === "red" || signal === "Red"){
//     alert("Must stop")
// }else if (signal === "yellow" || signal === "Yellow"){
//     alert("Ready to Move")
// }else{
//     alert("move now")
// }


// Question4
// var fuel = +prompt("Enter Your Fuel in litre");
// if (fuel <= 0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("Tank is full")
// }


// Question5
// var sub1mark = +prompt("Enter Your Subject1 Marks")
// var sub2mark = +prompt("Enter Your Subject2 Marks")
// var sub3mark = +prompt("Enter Your Subject3 Marks")
// var obt1 = +prompt("Enter Your Obtained Mark1")
// var obt2 = +prompt("Enter Your Obtained Mark2")
// var obt3 = +prompt("Enter Your Obtained Mark3")
// var tot = (sub1mark+sub2mark+sub3mark);
// var toobt = (obt1+obt2+obt3);
// var perc = toobt/tot*100;
// if (perc >=80 && perc<=100){
//     document.write("Total Marks : " + tot +"<br>")
//     document.write("Obtained Marks : " + toobt +"<br>")
//     document.write("Percentage : " + perc +"<br>")
//     document.write("Grade A+" +"<br>")
//     document.write("Remarks : Excellent" +"<br>")

// }else if (perc >=70 && perc<=80){
//     document.write("Total Marks : " + tot +"<br>")
//     document.write("Obtained Marks : " + toobt +"<br>")
//     document.write("Percentage : " + perc +"<br>")
//     document.write("Grade A" +"<br>")
//     document.write("Remarks : Good" +"<br>")

// }else if (perc >=60 && perc<=70){
//     document.write("Total Marks : " + tot +"<br>")
//     document.write("Obtained Marks : " + toobt +"<br>")
//     document.write("Percentage : " + perc +"<br>")
//     document.write("Grade B" +"<br>")
//     document.write("Remarks : You Need Improve" +"<br>")

// }else if (perc >=50 && perc<=60){
//     document.write("Total Marks : " + tot +"<br>")
//     document.write("Obtained Marks : " + toobt +"<br>")
//     document.write("Percentage : " + perc +"<br>")
//     document.write("Grade C" +"<br>")
//     document.write("Remarks : You Need Improve" +"<br>")

// }else if (perc >=40 && perc<=50){
//     document.write("Total Marks : " + tot +"<br>")
//     document.write("Obtained Marks : " + toobt +"<br>")
//     document.write("Percentage : " + perc +"<br>")
//     document.write("Grade D" +"<br>")
//     document.write("Remarks : You Need Improve" +"<br>")

// }else if (perc >=33 && perc<=40){
//     document.write("Total Marks : " + tot +"<br>")
//     document.write("Obtained Marks : " + toobt +"<br>")
//     document.write("Percentage : " + perc +"<br>")
//     document.write("Grade E" +"<br>")
//     document.write("Remarks : You Need Improve" +"<br>")

// }else if (perc >=0 && perc<=33){
//     document.write("Total Marks : " + tot +"<br>")
//     document.write("Obtained Marks : " + toobt +"<br>")
//     document.write("Percentage : " + perc +"<br>")
//     document.write("Grade F" +"<br>")
//     document.write("Remarks : Fail" +"<br>")

// }else{
//     alert("Sorry Your Not Imposible percentage")
// }


// Question6
// var secret = 5
// var guesssecret = +prompt("Enter Your Secrete Guess Number");
// if (secret === guesssecret){
//     alert("Bingo! Correct answer")
// }else if(secret === guesssecret+1){
//     alert("Close enough to the correct answer")
// }else{
//     alert("try again")
// }


// Question7
// var divde = prompt("Enter your number with divisble by 3")
// var div = divde%3;
// if (div === 0){
//     alert("yes")
// }else{
//     alert("NO")
// }


// Question8
// var even = prompt("Enter Your even number ");
// var eve = even%2;
// if (eve === 0){
//     alert("Even")
// }else{
//     alert("ODD")
// }


// Question9
// var temp = prompt("Enter Your Temperture");
// if (temp >= 40){
//     alert("It is too hot outside")
// }else if(temp >= 30){
//     alert("The Weather today is Normal.")
// }else if(temp >= 20){
//     alert("Today’s Weather is cool")
// }else if(temp >= 10){
//     alert("OMG! Today’s weather is so Cool.")
// }


// Question10
// var firstNum = +prompt("Enter Your First Number");
// var oper = prompt("Enter Your Opertor");
// var SecondNum = +prompt("Enter Your Second Number");
// if (oper === "+"){
//     alert(firstNum+SecondNum)
// }else if (oper === "-"){
//     alert(firstNum-SecondNum)
// }else if (oper === "/"){
//     alert(firstNum/SecondNum)
// }else if (oper === "*"){
//     alert(firstNum*SecondNum)
// }else if (oper === "%"){
//     alert(firstNum%SecondNum)
// }else{
//     alert("Sorry your not opertor")
// }