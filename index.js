var currentPage = null;
var currentCatagory = null;
var fileData = getData();

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
    createTopicButton(catagory.topic[i]);
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

function createTopicButton(topic){
  var topicButton = document.createElement("input");
  topicButton.type = "button";
  topicButton.value = topic.name;
  topicButton.addEventListener('click', function(){
      displayTopicInfo(topic);
    });
  document.getElementById("currentCatagory").appendChild(topicButton);

  var br = document.createElement("br");
  document.getElementById("currentCatagory").appendChild(br);
}

function displayTopicInfo(topic){
  if(currentPage != topic.name){
    if(currentPage != null){
      clearCurrentPage("info", "currentPage");
    }
    printInfo(topic);
  }

  currentPage = topic.name;
}

function printInfo(data){
  var currentPage = document.createElement("div");
  currentPage.id = "currentPage";

  var infoTitle = document.createElement("h1");
  infoTitle.className = "characterTitle";
  infoTitle.innerHTML = data.name;
  currentPage.appendChild(infoTitle);

  var br = document.createElement("br");
  currentPage.appendChild(br);

  var info = document.createElement("h3");
  info.className = "characterInfo";
  info.innerHTML = data.info;
  currentPage.appendChild(info);

  document.getElementById("info").appendChild(currentPage);
}

function clearCurrentPage(parentId, childId){
  document.getElementById(parentId).removeChild(document.getElementById(childId));
}

function getCatagory(catagoryNum){

  return data[catagoryNum];
}

function getData(){
  let data = `[
    {
      "topic_name": "Gangs",
      "topic": [{
        "name": "Crystal Fang",
        "info": "Small Gay"
        },{
          "name": "Burning Brotherhood",
          "info": "Big Gay"
        },{
          "name": "Moonlit Shadows",
          "info": "SUPER MEGA GAY"
        },{
          "name": "Black Lotus",
          "info": "HYPER SUPER GIGA EBOLA GAY"
        }]
    },{
      "topic_name": "Fruits",
      "topic": [{
        "name": "Apple",
        "info": "Applee"
        },{
          "name": "Oranga",
          "info": "Orangee"
        },{
          "name": "Pear",
          "info": "Pearr"
        },{
          "name": "Lotus",
          "info": "Lotuss"
        }]
    },{
      "topic_name": "Charaters",
      "topic": [{
        "name": "Maddox",
        "info": "Dragobborn"
        },{
          "name": "Pisci",
          "info": "Genasi"
        },{
          "name": "Arasatra",
          "info": "Elf"
        },{
          "name": "Xerxes",
          "info": "Half-Elf"
        }]
    }
  ]`
  
  return JSON.parse(data);
}