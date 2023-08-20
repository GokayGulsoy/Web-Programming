let personNameSet = false;
let notPurpleContactInfo = true;
let notPurpleLocationInfo = true;
let notPurpleAboutUs = true;

function manipulateAboutUs() {
  const aboutUsElement = document.getElementsByClassName("header_about_button");
  const dropDownBox = document.getElementById("about_us");

  if (notPurpleAboutUs) {
    aboutUsElement[0].style.color = "#EB00FF";
    dropDownBox.style.display = "block";
    notPurpleAboutUs = false;
  } else {
    const mode = document.getElementsByClassName("switch_mode");

    if (mode[0].innerHTML === "Switch to Dark Mode") {
      aboutUsElement[0].style.color = "#001AFF";
    } else {
      aboutUsElement[0].style.color = "#00C2FF";
    }

    dropDownBox.style.display = "none";
    notPurpleAboutUs = true;
  }
}

function switchMode() {
  const mode = document.getElementsByClassName("switch_mode");
  if (mode[0].innerHTML === "Switch to Dark Mode") {
    const about_us = document.getElementsByClassName("header_about_button");

    if (notPurpleAboutUs) {
      about_us[0].style.color = "#00C2FF";
    }

    about_us[0].style.backgroundColor = "#404040";
    mode[0].style.color = "#10CB00";
    mode[0].style.backgroundColor = "#404040";
    const contact_info = document.getElementById("location1");

    if (notPurpleContactInfo) {
      contact_info.style.color = "#00C2FF";
    }
    contact_info.style.backgroundColor = "#506262";
    const location_info = document.getElementById("location2");
    if (notPurpleLocationInfo) {
      location_info.style.color = "#00C2FF";
    }
    location_info.style.backgroundColor = "#506262";
    const header_info = document.getElementById("header");
    header_info.style.color = "#ffffff";
    const footer = document.getElementsByClassName("footer_part");
    footer[0].style.backgroundColor = "#506262";
    const header = document.getElementsByClassName("header_h1");
    header[0].style.backgroundColor = "#404040";
    const search_bar = document.getElementsByClassName("search_bar");
    search_bar[0].style.backgroundColor = "#262626";
    search_bar[0].style.color = "white";

    if (!personNameSet) {
      const button = document.getElementsByClassName("button");
      button[0].style.color = "#000000";
    }

    document.body.style.backgroundColor = "#808080";
    const foods = document.getElementsByClassName("foods");

    for (let i = 0; i < 3; i++) {
      foods[i].style.backgroundColor = "#262626";
      foods[i].style.color = "white";
    }

    const foods2 = document.getElementsByClassName("foods2");
    for (let i = 0; i < 3; i++) {
      foods2[i].style.backgroundColor = "#262626";
      foods2[i].style.color = "white";
    }

    mode[0].innerHTML = "Switch to Light Mode";
  } else {
    const about_us = document.getElementsByClassName("header_about_button");

    if (notPurpleAboutUs) {
      about_us[0].style.color = "#001AFF";
    }

    about_us[0].style.backgroundColor = "#b1bdbd";
    mode[0].style.color = "#032900";
    mode[0].style.backgroundColor = "#b1bdbd";
    const contact_info = document.getElementById("location1");

    if (notPurpleContactInfo) {
      contact_info.style.color = "#001AFF";
    }

    contact_info.style.backgroundColor = "#b1bdbd";
    const location_info = document.getElementById("location2");

    if (notPurpleLocationInfo) {
      location_info.style.color = "#001AFF";
    }

    location_info.style.backgroundColor = "#b1bdbd";
    const header_info = document.getElementById("header");
    header_info.style.color = "#000000";
    const footer = document.getElementsByClassName("footer_part");
    footer[0].style.backgroundColor = "#b1bdbd";
    const header = document.getElementsByClassName("header_h1");
    header[0].style.backgroundColor = "#b1bdbd";
    const search_bar = document.getElementsByClassName("search_bar");
    search_bar[0].style.backgroundColor = "#eceff1";
    search_bar[0].style.color = "#000000";

    if (!personNameSet) {
      const button = document.getElementsByClassName("button");
      button[0].style.color = "#ffffff";
    }

    document.body.style.backgroundColor = "#ffffff";

    const foods = document.getElementsByClassName("foods");
    for (let i = 0; i < 3; i++) {
      foods[i].style.backgroundColor = "#ece7e7";
      foods[i].style.color = "#000000";
    }

    const foods2 = document.getElementsByClassName("foods2");
    for (let i = 0; i < 3; i++) {
      foods2[i].style.backgroundColor = "#ece7e7";
      foods2[i].style.color = "#000000";
    }

    mode[0].innerHTML = "Switch to Dark Mode";
  }
}

function checkInput() {
  const inputText = document.getElementsByTagName("input");
  let letters = /^[A-Za-z]+$/;

  const buttonElement = document.getElementsByClassName("button");
  if (inputText[0].value.match(letters)) {
    buttonElement[0].style.backgroundColor = "grey";
    const entryText = document.getElementsByClassName("search_bar");
    const personName = inputText[0].value;
    inputText[0].value = "";
    entryText[0].innerHTML = "Welcome, " + personName;
    personNameSet = true;
  } else {
    inputText[0].value = "";
    buttonElement[0].style.backgroundColor = "#FF4545";
  }
}

function manipulateContactInfo() {
  const contactElement = document.getElementById("location1");
  const emblems = document.getElementsByClassName("contact_info");

  if (notPurpleContactInfo) {
    const locationElement = document.getElementById("location2");
    const locationBlock = document.getElementsByClassName("location_info");
    if (!notPurpleLocationInfo) {
      const mode = document.getElementsByClassName("switch_mode");

      if (mode[0].innerHTML === "Switch to Dark Mode") {
        locationElement.style.color = "#001AFF";
      } else {
        locationElement.style.color = "#00c2ff";
      }

      locationBlock[0].style.display = "none";
      notPurpleLocationInfo = true;
    }

    emblems[0].style.display = "block";
    contactElement.style.color = "#EB00FF";
    notPurpleContactInfo = false;
  } else {
    const mode = document.getElementsByClassName("switch_mode");

    if (mode[0].innerHTML === "Switch to Dark Mode") {
      contactElement.style.color = "#001AFF";
    } else {
      contactElement.style.color = "#00c2ff";
    }

    emblems[0].style.display = "none";
    notPurpleContactInfo = true;
  }
}

function manipulateLocationInfo() {
  const locationElement = document.getElementById("location2");
  const locationBlock = document.getElementsByClassName("location_info");

  if (notPurpleLocationInfo) {
    const contactElement = document.getElementById("location1");
    const emblems = document.getElementsByClassName("contact_info");
    if (!notPurpleContactInfo) {
      const mode = document.getElementsByClassName("switch_mode");

      if (mode[0].innerHTML === "Switch to Dark Mode") {
        contactElement.style.color = "#001AFF";
      } else {
        contactElement.style.color = "#00c2ff";
      }

      emblems[0].style.display = "none";
      notPurpleContactInfo = true;
    }

    locationBlock[0].style.display = "block";
    locationElement.style.color = "#EB00FF";
    notPurpleLocationInfo = false;
  } else {
    const mode = document.getElementsByClassName("switch_mode");

    if (mode[0].innerHTML === "Switch to Dark Mode") {
      locationElement.style.color = "#001AFF";
    } else {
      locationElement.style.color = "#00c2ff";
    }

    locationBlock[0].style.display = "none";
    notPurpleLocationInfo = true;
  }
}
