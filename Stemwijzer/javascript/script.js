var statementOrder = 0;

var stellingTitle = document.getElementById("stellingTitle");
var stellingDescription = document.getElementById("stellingDescription");

function start() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("stellingPage").style.display = "block";

  //Zet de eerste vraag klaar
  stellingTitle.innerHTML = subjects[0].title;
  stellingDescription.innerHTML = subjects[0].statement;
}

function nextStatement(){
  //langs alle statements gaan
  //op de goede volgorde laten zien
  //de volgende vraag laten zien
  
  if(statementOrder < subjects.length){
    statementOrder++;
    stellingTitle.innerHTML = subjects[statementOrder].title;
    stellingDescription.innerHTML = subjects[statementOrder].statement;
  }
}