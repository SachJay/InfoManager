var currentPage = null;
var currentCatagory = null;
var fs = require("fs");

fs.readFile("data.txt", "utf8", function(err, data){
  var fileData = data;
});

function displayCatagories(){
  clearCurrentPage("everything", "currentCatagory");
  currentPage = null;

  if(document.getElementById("currentPage") != null){
    clearCurrentPage("info", "currentPage");
  }

  var currentCatagory = document.createElement("div");
  currentCatagory.id = "currentCatagory";
  document.getElementById("everything").appendChild(currentCatagory);

  for(var i = 0; i < fileData.length; i++){
    createCatagoryButton(fileData[i]);
  }
}

function displayTopics(catagory){
  clearCurrentPage("everything", "currentCatagory");
  numberOfTopics = catagory.topic.length;

  var currentCatagory = document.createElement("div");
  currentCatagory.id = "currentCatagory";
  document.getElementById("everything").appendChild(currentCatagory);

  for(var i = 0; i < numberOfTopics; i++){
    createTopicButton(catagory.topic[i], catagory);
  }

  createBackButton();
}

function createBackButton(){
  var backButton = document.createElement("input");
  backButton.type = "button";
  backButton.value = "Back";
  backButton.addEventListener('click', function(){
      displayCatagories();
    });
  document.getElementById("currentCatagory").appendChild(backButton);

  var br = document.createElement("br");
  document.getElementById("currentCatagory").appendChild(br);
}

function createCatagoryButton(catagory){
  var topic = document.createElement("input");
  topic.type = "button";
  topic.value = catagory.topic_name;
  topic.addEventListener('click', function(){
      displayTopics(catagory);
    });
  document.getElementById("currentCatagory").appendChild(topic);

  var br = document.createElement("br");
  document.getElementById("currentCatagory").appendChild(br);
}

function createTopicButton(topic, catagory){
  var topicButton = document.createElement("input");
  topicButton.type = "button";
  topicButton.value = topic.name;
  topicButton.addEventListener('click', function(){
      displayTopicInfo(topic, catagory);
    });
  document.getElementById("currentCatagory").appendChild(topicButton);

  var br = document.createElement("br");
  document.getElementById("currentCatagory").appendChild(br);
}

function displayTopicInfo(topic, catagory){
  if(currentPage != topic.name){
    if(document.getElementById("currentPage") != null){
      clearCurrentPage("info", "currentPage");
    }

    if(catagory.topic_type == "Character"){
      printCharacterInfo(topic);
    } else if(catagory.topic_type == "Info"){
      printBasicInfo(topic);

    }
  }

  currentPage = topic.name;
}

function printBasicInfo(topic){
  var currentPage = document.createElement("div");
  currentPage.id = "currentPage";

  var infoTitle = document.createElement("h1");
  infoTitle.className = "characterTitle";
  infoTitle.innerHTML = topic.name;
  currentPage.appendChild(infoTitle);

  var info = document.createElement("h3");
  info.className = "characterInfo";
  info.innerHTML = topic.info;
  currentPage.appendChild(info);

  document.getElementById("info").appendChild(currentPage);
}

function printCharacterInfo(topic){
  var currentPage = document.createElement("div");
  currentPage.id = "currentPage";

  var infoTitle = document.createElement("h1");
  infoTitle.className = "characterTitle";
  infoTitle.innerHTML = topic.name;
  currentPage.appendChild(infoTitle);


  var br = document.createElement("br");
  currentPage.appendChild(br);

  document.getElementById("info").appendChild(currentPage);

  printBasicCharacterInfo(topic);
  printCharacterStats(topic);
  printAdvancedCharacterInfo(topic);
  printActionsAndSpecial(topic);

  var br = document.createElement("br");
  currentPage.appendChild(br);
}

function printBasicCharacterInfo(topic){
  var currentPage = document.getElementById("currentPage");

  var infoTitle = document.createElement("p");
  infoTitle.className = "characterBasicInfoTitle";
  infoTitle.innerHTML = topic.size+" "+topic.type+", "+topic.alignment;
  currentPage.appendChild(infoTitle);
  var br = document.createElement("br");
  currentPage.appendChild(br);

  var br = document.createElement("br");
  currentPage.appendChild(br);

  var infoTitle = document.createElement("h4");
  infoTitle.className = "characterBasicInfoTitle";
  infoTitle.innerHTML = "Armor Class:";
  currentPage.appendChild(infoTitle);
  var info = document.createElement("p");
  info.className = "characterBasicInfo";
  info.innerHTML = topic.armor_class;
  currentPage.appendChild(info);
  var br = document.createElement("br");
  currentPage.appendChild(br);

  var infoTitle = document.createElement("h4");
  infoTitle.className = "characterBasicInfoTitle";
  infoTitle.innerHTML = "Hit Points: ";
  currentPage.appendChild(infoTitle);
  var info = document.createElement("p");
  info.className = "characterBasicInfo";
  info.innerHTML = topic.hit_points;
  currentPage.appendChild(info);
  var br = document.createElement("br");
  currentPage.appendChild(br);

  var infoTitle = document.createElement("h4");
  infoTitle.className = "characterBasicInfoTitle";
  infoTitle.innerHTML = "Speed: ";
  currentPage.appendChild(infoTitle);
  var info = document.createElement("p");
  info.className = "characterBasicInfo";
  info.innerHTML = topic.speed;
  currentPage.appendChild(info);
  var br = document.createElement("br");
  currentPage.appendChild(br);

  var br = document.createElement("br");
  currentPage.appendChild(br);
}

function printCharacterStats(topic){
  var currentPage = document.getElementById("currentPage");

  var statTable = document.createElement("table");
  statTable.className = "statDiv";

  var thead = document.createElement("thead");
  for(var i = 0; i < 6; i++){
    var statTitle = document.createElement("th");
    statTitle.className = "statsTitle";
    statTitle.innerHTML = getStatName(i);
    thead.appendChild(statTitle);
  }
  statTable.appendChild(thead);

  var tbody = document.createElement("tbody");
  for(var i = 0; i < 6; i++){
    var statValue = document.createElement("td");
    statValue.className = "statsValue";
    statValue.innerHTML = getStatValue(topic, i);
    tbody.appendChild(statValue);
  }
  statTable.appendChild(tbody);

  currentPage.appendChild(statTable);
}

function getStatName(value){
  switch(value){
    case 0: return "Str";
    case 1: return "Dex";
    case 2: return "Con";
    case 3: return "Int";
    case 4: return "Wis";
    case 5: return "Cha";
  }
}

function getStatValue(topic, value){
  switch(value){
    case 0: return topic.strength;
    case 1: return topic.dexterity;
    case 2: return topic.constitution;
    case 3: return topic.intelligence;
    case 4: return topic.wisdom;
    case 5: return topic.charisma;
  }
}

function printAdvancedCharacterInfo(topic){
  var currentPage = document.getElementById("currentPage");

  var br = document.createElement("br");
  currentPage.appendChild(br);

  var senseInfoTitle = document.createElement("h4");
  senseInfoTitle.className = "characterBasicInfoTitle";
  senseInfoTitle.innerHTML = "Senses: ";
  currentPage.appendChild(senseInfoTitle);
  var senseInfo = document.createElement("p");
  senseInfo.className = "characterBasicInfo";
  senseInfo.innerHTML = topic.senses;
  currentPage.appendChild(senseInfo);
  var br = document.createElement("br");
  currentPage.appendChild(br);

  var langInfoTitle = document.createElement("h4");
  langInfoTitle.className = "characterBasicInfoTitle";
  langInfoTitle.innerHTML = "Languages: ";
  currentPage.appendChild(langInfoTitle);
  var langInfo = document.createElement("p");
  langInfo.className = "characterBasicInfo";
  langInfo.innerHTML = topic.languages;
  currentPage.appendChild(langInfo);
  var br = document.createElement("br");
  currentPage.appendChild(br);

  var challengeInfoTitle = document.createElement("h4");
  challengeInfoTitle.className = "characterBasicInfoTitle";
  challengeInfoTitle.innerHTML = "Challenge: ";
  currentPage.appendChild(challengeInfoTitle);
  var challengeInfo = document.createElement("p");
  challengeInfo.className = "characterBasicInfo";
  challengeInfo.innerHTML = topic.challenge_rating;
  currentPage.appendChild(challengeInfo);
  var br = document.createElement("br");
  currentPage.appendChild(br);

  if(topic.damage_vulnerabilities != ""){
    var vulnerabeInfoTitle = document.createElement("h4");
    vulnerabeInfoTitle.className = "characterBasicInfoTitle";
    vulnerabeInfoTitle.innerHTML = "Vulnerabe: ";
    currentPage.appendChild(vulnerabeInfoTitle);
    var vulnerabeInfo = document.createElement("p");
    vulnerabeInfo.className = "characterBasicInfo";
    vulnerabeInfo.innerHTML = topic.damage_vulnerabilities;
    currentPage.appendChild(vulnerabeInfo);
    var br = document.createElement("br");
    currentPage.appendChild(br);
  }

  if(topic.damage_resistances != ""){
    var resistanceInfoTitle = document.createElement("h4");
    resistanceInfoTitle.className = "characterBasicInfoTitle";
    resistanceInfoTitle.innerHTML = "Resistances: ";
    currentPage.appendChild(resistanceInfoTitle);
    var resistanceInfo = document.createElement("p");
    resistanceInfo.className = "characterBasicInfo";
    resistanceInfo.innerHTML = topic.damage_resistances;
    currentPage.appendChild(resistanceInfo);
    var br = document.createElement("br");
    currentPage.appendChild(br);
  }

  if(topic.damage_immunities != ""){
    var immunitiesInfoTitle = document.createElement("h4");
    immunitiesInfoTitle.className = "characterBasicInfoTitle";
    immunitiesInfoTitle.innerHTML = "Immunities: ";
    currentPage.appendChild(immunitiesInfoTitle);
    var immunitiesInfo = document.createElement("p");
    immunitiesInfo.className = "characterBasicInfo";
    immunitiesInfo.innerHTML = topic.damage_immunities;
    currentPage.appendChild(immunitiesInfo);
    var br = document.createElement("br");
    currentPage.appendChild(br);
  }

  if(topic.condition_immunities != ""){
    var conditionImmunitiesInfoTitle = document.createElement("h4");
    conditionImmunitiesInfoTitle.className = "characterBasicInfoTitle";
    conditionImmunitiesInfoTitle.innerHTML = "Condition Immunities: ";
    currentPage.appendChild(conditionImmunitiesInfoTitle);
    var conditionImmunitiesInfo = document.createElement("p");
    conditionImmunitiesInfo.className = "characterBasicInfo";
    conditionImmunitiesInfo.innerHTML = topic.condition_immunities;
    currentPage.appendChild(conditionImmunitiesInfo);
    var br = document.createElement("br");
    currentPage.appendChild(br);
  }

  var br = document.createElement("br");
  currentPage.appendChild(br);
}

function printActionsAndSpecial(topic){
  var numOfActions = topic.actions.length;

  var currentPage = document.getElementById("currentPage");
  //---Inefficient--Start

  if(topic.special_abilities != null){
    var numOfSpecialAb = topic.special_abilities.length;

    var infoTitle = document.createElement("h2");
    infoTitle.className = "characterTitle";
    infoTitle.innerHTML = "Special Abilities";
    currentPage.appendChild(infoTitle);
    var br = document.createElement("br");
    currentPage.appendChild(br);

    for(var i = 0; i < numOfSpecialAb; i++){
      var infoTitle = document.createElement("h4");
      infoTitle.className = "actionTitle";
      infoTitle.innerHTML = topic.special_abilities[i].name;
      currentPage.appendChild(infoTitle);

      var info = document.createElement("p");
      info.className = "actionInfo";
      info.innerHTML = topic.special_abilities[i].desc;
      currentPage.appendChild(info);
    }
  }

  var infoTitle = document.createElement("h2");
  infoTitle.className = "characterTitle";
  infoTitle.innerHTML = "Actions";
  currentPage.appendChild(infoTitle);
  var br = document.createElement("br");
  document.getElementById("currentPage").appendChild(br);

  for(var i = 0; i < numOfActions; i++){
    var infoTitle = document.createElement("h4");
    infoTitle.className = "actionTitle";
    infoTitle.innerHTML = topic.actions[i].name;
    currentPage.appendChild(infoTitle);

    var info = document.createElement("p");
    info.className = "actionInfo";
    info.innerHTML = topic.actions[i].desc;
    currentPage.appendChild(info);
  }

  //---Inefficient--End
}

function clearCurrentPage(parentId, childId){
  document.getElementById(parentId).removeChild(document.getElementById(childId));
}

function getCatagory(catagoryNum){

  return data[catagoryNum];
}
