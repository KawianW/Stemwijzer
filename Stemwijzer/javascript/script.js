//Globale variabelen
var statementOrder = 0;

var stellingTitle = document.getElementById("stellingTitle");
var stellingDescription = document.getElementById("stellingDescription");

var topParties = [];
var bigParty = 10;

//Deze foreach looped door de subjects en voegt de objecten toe
subjects.forEach(subject=> {
  subject.myAnswer = '';
  subject.important = false;
});

parties.forEach(party =>{
  party.points = 0;
})

/**
 * De Pagina met de vragen word geladen
 */
function start() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("stellingPage").style.display = "block";

  //Zet de eerste vraag klaar
  stellingTitle.innerHTML = subjects[0].title;
  stellingDescription.innerHTML = subjects[0].statement;
}
/**
 * @param answer De keuze die je hebt gemaakt (pro, none, contra)
 */
function setAnswer(answer) {
  //De mening word toegevoegd aan answer
  subjects[statementOrder].myAnswer = answer;
  //Ook word de waarde van de checkbox geregistreerd 
  subjects[statementOrder].important = document.getElementById('important').checked;
  //Nieuwe functie word uitgevoerd
  nextStatement();
}


/**
 * Nieuwe stelling word geladen, wanneer je bij de laatste vraag bent word er een functie aangeroepen.
 */
function nextStatement(){
  if(statementOrder < subjects.length -1){
    statementOrder++;
    //Nieuwe stelling word geladen
    stellingTitle.innerHTML = subjects[statementOrder].title;
    stellingDescription.innerHTML = subjects[statementOrder].statement;
    document.getElementById('important').checked = false;
    showAnswer(subjects[statementOrder].myAnswer);
  }
  // Als die bij de laatste vraag is gaat het alle punten bij elkaar optellen
  else (calculatePoints());
}

/**
 * Als de gebruiker op het pijltje terug klikt dan word de vorige vraag geladen 
 */
  function previousStatement(){
    if(statementOrder !== 0){
        statementOrder--;
        //Oude stelling word geladen
        stellingTitle.innerHTML = subjects[statementOrder].title;
        stellingDescription.innerHTML = subjects[statementOrder].statement;
        showAnswer(subjects[statementOrder].myAnswer);
    }else{
      //Als ben je bij de laatste vraag wordt de home pagina weer getoond
        document.getElementById("stellingPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
    }
}

/**
 * Als de gebruiker terug gaat naar een eerder ingevulde vraag word het antwoord wat je daar in hebt gevuld getoond
 * @param answer de mening die je hebt ingevoerd
 */
function showAnswer(answer) {
  document.getElementById('important').checked = false;
  for(var f = 0; f <document.getElementsByClassName('answerbtn').length; f++) {
    document.getElementsByClassName('answerbtn')[f].style.background = 'white';
  }
  if(subjects[statementOrder].important == true){
    document.getElementById('important').checked = true;
  }
  if(answer == ''){
    return
  } else {
    document.getElementById(answer).style.background = 'green';
  }
}

/**
 * Deze functie zorgt er voor dat de punten bij elkaar worden opgeteld
 */
function calculatePoints() {
  //hier loop je door de subjects
  for(var s=0; s<subjects.length; s++) {
    //hier loop je door de subject partijen
    for(var p=0; p<subjects[s].parties.length; p++) {
      // hier pak je je antwoord en vergelijk je antwoord met welke vraag je hebt beantwoord
      if(subjects[s].myAnswer == subjects[s].parties[p].position) {
        //hier worden de punten bij de partij getelt
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

/**
 * De pagina met een overzicht van de partijen in volgorde van de meeste punten word geladen
 */
function displayPartyPage() {
  //Nieuwe pagina word geladen
  document.getElementById("stellingPage").style.display = "none";
  document.getElementById("partyPage").style.display = "block";

  //De partijen worden op volgorde gezet met de meeste punten
  parties.sort((a, b) => b.points - a.points);
  console.log(parties);

  //Hier worden de partijen getoond
  for(var s = 0; s <parties.length; s++) {
    var p = document.createElement("p");
    p.innerHTML = parties[s].name;
    document.getElementById('partyOrder').appendChild(p);
  }
}

/** 
 * Deze functie word aangeroepen als de gebruiken alle partijen selecteerd 
 */
function getAllParties() {
  checkSelectParty('all')
  topParties = [];
  topParties = parties;
}

/**
 * Deze functie word aangeroepen als de gebruiken de zittende partijen selecteerd 
 */
function getSecularParties() {
  checkSelectParty('secular')
  topParties = [];
  topParties = parties.filter(party=>{
    return party.secular == true;
  })
}

/** 
 * Alleen de grote partijen worden geetoond
 */
function getBigParties() {
  checkSelectParty('big')
  topParties = [];
  topParties = parties.filter(party=>{
    return party.size >= bigParty;
  })
}

/** 
 * De kleur van de knop word veranderd al klik je op een van de knoppen
 * @param partyID de value van de knop 
 */
function checkSelectParty(partyID) {
  for(var f = 0; f <document.getElementsByClassName('filterParty').length; f++) {
    document.getElementsByClassName('filterParty')[f].style.background = 'white';
  }
  document.getElementById(partyID).style.background = 'green';
}

/** 
 * De Resultaat pagina word geladen 
 */
function showResultPage() {
  if(topParties.length == 0) {
    return alert("klik op een van de onderstaande knoppen!");
  }
  document.getElementById("partyPage").style.display = "none";
  document.getElementById("resultContainer").style.display = "block";

  //De top 3 partijen worden laten zien
  document.getElementById('1stPlace').innerHTML += topParties[0].name;
  document.getElementById('2ndPlace').innerHTML += topParties[1].name;
  document.getElementById('3rdPlace').innerHTML += topParties[2].name;
}
