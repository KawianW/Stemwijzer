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

  function previousStatement(){
    //als je terug wilt dat de vorige vraag tevoorschijn komt
    //de statements terughalen

    if(statementOrder !== 0){
        statementOrder--;
        stellingTitle.innerHTML = subjects[statementOrder].title;
        stellingDescription.innerHTML = subjects[statementOrder].statement;
    }else{
        document.getElementById("stellingPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
    }
}