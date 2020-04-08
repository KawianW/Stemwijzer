
var stellingTitle = document.getElementById("stellingTitle");
var stellingDes = document.getElementById("stellingDes");

function start() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("stellingPage").style.display = "block";

  //Zet de eerste vraag klaar
  stellingTitle.innerHTML = subjects[0].title;
  stellingDes.innerHTML = subjects[0].statement;
}

function nextStatement(){
      //Nieuwe stelling word geladen
      document.getElementById('important').checked = false;
      statementNumber++;
      stellingTitle.innerHTML = subjects[statementNumber].title;
      stellingDes.innerHTML = subjects[statementNumber].statement;
      checkStatement(subjects[statementNumber].myOpinion);
}