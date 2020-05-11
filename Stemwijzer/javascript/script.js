var statementOrder = 0;

var stellingTitle = document.getElementById("stellingTitle");
var stellingDescription = document.getElementById("stellingDescription");

var topParties = [];
var bigParty = 10;

subjects.forEach(subject=> {
  subject.myAnswer = '';
  subject.important = false;
});

parties.forEach(party =>{
  party.points = 0;
})

function start() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("stellingPage").style.display = "block";

  //Zet de eerste vraag klaar
  stellingTitle.innerHTML = subjects[0].title;
  stellingDescription.innerHTML = subjects[0].statement;
}
function setAnswer(answer) {
  subjects[statementOrder].myAnswer = answer;
  subjects[statementOrder].important = document.getElementById('important').checked;
  nextStatement();
}



function nextStatement(){
  //langs alle statements gaan
  //op de goede volgorde laten zien
  //de volgende vraag laten zien
  
  if(statementOrder < subjects.length -1){
    statementOrder++;
    stellingTitle.innerHTML = subjects[statementOrder].title;
    stellingDescription.innerHTML = subjects[statementOrder].statement;
    document.getElementById('important').checked = false;
    showAnswer(subjects[statementOrder].myAnswer);
  }
  else (calculatePoints());
}


  function previousStatement(){
    //als je terug wilt dat de vorige vraag tevoorschijn komt
    //de statements terughalen

    if(statementOrder !== 0){
        statementOrder--;
        stellingTitle.innerHTML = subjects[statementOrder].title;
        stellingDescription.innerHTML = subjects[statementOrder].statement;
        showAnswer(subjects[statementOrder].myAnswer);
    }else{
        document.getElementById("stellingPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
    }
}

function showAnswer(answer) {
  
}

function calculatePoints() {
  // console.log('test')
  for(var s=0; s<subjects.length; s++) {
    for(var p=0; p<subjects[s].parties.length; p++) {
      if(subjects[s].myAnswer == subjects[s].parties[p].position) {
        var findParty = parties.find(party => party.name == subjects[s].parties[p].name);

        if(subjects[s].important == true) {
          findParty.points +=2;
        } else {
          findParty.points +=1;
        }
      }
    }
  }
  displayPartyPage();
}

function displayPartyPage() {
  document.getElementById("stellingPage").style.display = "none";
  document.getElementById("partyPage").style.display = "block";

  parties.sort((a, b) => b.points - a.points);
  console.log(parties);

  for(var s = 0; s <parties.length; s++) {
    var p = document.createElement("p");
    p.innerHTML = parties[s].name;
    document.getElementById('partyOrder').appendChild(p);
  }
}

