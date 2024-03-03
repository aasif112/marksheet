

/* TO RE-MAKE MARK SHEET IN WHICH IT TAKE OBTAINED AND 
    TOTAL MARKS OF THREE SUBJECTS FROM USER 
    * SHOW FAIL IF LESS 50% IN ANY SUBJECT
    * GIVE GRADE AND REMARKS SIMILAR
    * GIVE REMARKS TO IMPROVE IN SUBJECT IN WHICH PERCENTAGE
        IS LOWER THAN 60%
*/


var sciObtmarks = prompt("enter your marks in Science", 50);
var mathObtmarks = prompt("enter your marks in Maths", 50);
var engObtmarks = prompt("enter your marks in English", 50);

var sciTmarks = document.querySelector("#sciTmarks");
var sciPmarks = document.querySelector("#sciPmarks");
var sciPassfail = document.querySelector("#sciPassfail");
var mathTmarks = document.querySelector("#mathTmarks");
var mathPmarks = document.querySelector("#mathPmarks");
var mathPassfail = document.querySelector("#mathPassfail");

var engTmarks = document.querySelector("#engTmarks");
var engPmarks = document.querySelector("#engPmarks");
var engPassfail = document.querySelector("#engPassfail");

var grndTmarks = document.querySelector("#grndTmarks");
var grndPmarks = document.querySelector("#grndPmarks");

var remarks = document.querySelector("#remarks");
var perc = document.querySelector("#perc");

var grndPassfail = document.querySelector("#grndPassfail");
var grndPassfail2 = document.querySelector("#grndPassfail2");


sciObtmarks = Number(sciObtmarks);
mathObtmarks = Number(mathObtmarks);
engObtmarks = Number(engObtmarks);
var grndObtmarks = sciObtmarks + mathObtmarks + engObtmarks;


percentage = (grndObtmarks / 300)*100;



var getResult =document.querySelector("#getResult");

const generateRes = () => {
    // SHOW MARKS
    
document.querySelector("#sciObtmarks").innerHTML = sciObtmarks;
document.querySelector("#mathObtmarks").innerHTML = mathObtmarks;
document.querySelector("#engObtmarks").innerHTML = engObtmarks;
document.querySelector("#grndObtmarks").innerHTML = grndObtmarks;
document.querySelector("#grndObtmarks2").innerHTML = grndObtmarks;
perc.innerHTML = `${percentage} %`;

    // PASS /FAIL OF EACH SUBJECT
if(sciObtmarks >= 50  && sciObtmarks <= 100) {
    sciPassfail.innerHTML = "Pass";
} else {sciPassfail.innerHTML = "Fail"};

if(mathObtmarks >= 50 && mathObtmarks <= 100) {
    mathPassfail.innerHTML = "Pass";
} else {    mathPassfail.innerHTML = "Fail"; }

if(engObtmarks >= 50 && engObtmarks <= 100) {
    engPassfail.innerHTML = "Pass";
} else {    engPassfail.innerHTML = "Fail"; }

// IF FAIL IN ONE SUBJ: 
if (sciObtmarks < 50  || mathObtmarks < 50 || engObtmarks < 50) {
    grndPassfail.innerHTML = "<b>Fail</b>";
    grndPassfail2.innerHTML = "<b>Fail</b>";
    remarks.innerHTML = "Fail in one Subject."
}
// IF PASS IN EACH SUB: DECIDE GRADE
if (sciObtmarks >= 50 && mathObtmarks >= 50 && engObtmarks >= 50){
    grndPassfail.innerHTML = "<b>Pass</b>";
    grndPassfail2.innerHTML = "<b>Pass</b>";
    if(percentage >= 80) {
        grndPassfail.innerHTML = "<b>A-one</b>";
        grndPassfail2.innerHTML = "<b>A-one</b>";
        remarks.innerHTML = "Excellent."
    } else if (percentage >= 70) {
        grndPassfail.innerHTML = "<b>A</b>";
        grndPassfail2.innerHTML = "<b>A</b>";
        remarks.innerHTML = "Good."
    } else if (percentage >= 60) {
        grndPassfail.innerHTML = "<b>B</b>";
        grndPassfail2.innerHTML = "<b>B</b>";
        remarks.innerHTML = "You need to improve."
    } else if (percentage < 60) {
        grndPassfail.innerHTML = "<b>Fail</b>";
        grndPassfail2.innerHTML = "<b>Fail</b>";
        remarks.innerHTML = "Over all percentage less than 60%."
    }    
}
}

getResult.addEventListener("click", () => {
    return generateRes();
})



















