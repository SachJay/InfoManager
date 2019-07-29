var currentPage = null;

function displayCharacter(characterName){
  if(currentPage != characterName){
    if(currentPage != null){
      clearCurrentPage();
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

function clearCurrentPage(){
  document.getElementById("info").removeChild(document.getElementById("currentPage"));
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
