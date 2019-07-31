var currentPage = null;
var currentCatagory = null;

function displayCatagory(catagoryName){
  if(currentCatagory != catagoryName){
    if(currentCatagory != null){
      clearCurrentPage("catagories", "currentCatagory");
    }
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

  var info = document.createElement("h3");
  info.className = "characterInfo";
  info.innerHTML = getInfo(characterName);
  currentPage.appendChild(info);

  document.getElementById('info').appendChild(currentPage);
}

function printCatagory(catagoryName){
  var currentPage = document.createElement("div");
  currentPage.id = "currentCatagory";

  var infoTitle = document.createElement("h1");
  infoTitle.className = "characterTitle";
  infoTitle.innerHTML = catagoryName;
  currentPage.appendChild(infoTitle);

  getCatagories(catagoryName);

  document.getElementById('info').appendChild(currentPage);
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
