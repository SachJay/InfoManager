var currentPage = null;
var currentCatagory = null;

function displayCatagory(catagoryName){
  if(currentCatagory != catagoryName){
    clearCurrentPage("catagories", "currentCatagory");
    printCatagory(catagoryName);
  }
  currentCatagory = catagoryName;
}

function displayCharacter(characterName){
  if(currentPage != characterName){
    if(currentPage != null){
      clearCurrentPage("info", "currentPage");
    }
    printInfo(characterName);
  }

  currentPage = characterName;
}

function printInfo(characterName){
  var currentPage = document.createElement("div");
  currentPage.id = "currentPage";

  var infoTitle = document.createElement("h1");
  infoTitle.className = "characterTitle";
  infoTitle.innerHTML = characterName;
  currentPage.appendChild(infoTitle);

  var br = document.createElement("br");
  currentPage.appendChild(br);

  var info = document.createElement("h3");
  info.className = "characterInfo";
  info.innerHTML = getInfo(characterName);
  currentPage.appendChild(info);

  document.getElementById("info").appendChild(currentPage);
}

function printCatagory(catagoryName){
  var currentPage = document.createElement("div");
  currentPage.id = "currentCatagory";

  var infoTitle = document.createElement("h1");
  infoTitle.className = "characterTitle";
  infoTitle.innerHTML = catagoryName;
  currentPage.appendChild(infoTitle);
//<input type="button" name="" value="Crystal Fang" onclick="displayCharacter('CrystalFang')"><br>
  var topic1 = document.createElement("input");
  topic1.type = "button";
  topic1.value = "CrystalFang"
  topic1.addEventListener('click', function(){
      displayCharacter('CrystalFang');
    });
  currentPage.appendChild(topic1);

  var topic2 = document.createElement("input");
  topic2.type = "button";
  topic2.value = "BurningBrotherhood"
  topic2.addEventListener('click', function(){
      displayCharacter('BurningBrotherhood');
    });
  currentPage.appendChild(topic2);

  var topic3 = document.createElement("input");
  topic3.type = "button";
  topic3.value = "MoonlitShadows"
  topic3.addEventListener('click', function(){
      displayCharacter('MoonlitShadows');
    });
  currentPage.appendChild(topic3);

  document.getElementById("catagories").appendChild(currentPage);
}

function clearCurrentPage(parentId, childId){
  document.getElementById(parentId).removeChild(document.getElementById(childId));
}

function getInfo(characterName){
  switch (characterName) {
    case "CrystalFang":
      return "Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi Yah Boi ";
      break;

    case "BurningBrotherhood":
      return "Big Gay";
      break;

    case "MoonlitShadows":
      return "Small Gay";
      break;

    default:
    return "Error";
  }
}
