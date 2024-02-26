var language = sessionStorage.getItem("language");
if(language==null){
    language="TR";
}
configurePageLanguage(language);

var languageButtons = document.querySelectorAll("#navbar .dropdown-content a");
languageButtons.forEach(languageButton=>languageButton.addEventListener("click", ()=>{
    language = languageButton.getAttribute("language");
    sessionStorage.setItem("language", language);
    configurePageLanguage(language);
}));

var mobileLanguageButtons = document.querySelectorAll("#navbar .dropdown-content-mobile a");
mobileLanguageButtons.forEach(languageButton=>languageButton.addEventListener("click", ()=>{
    language = languageButton.getAttribute("language");
    sessionStorage.setItem("language", language);
    configurePageLanguage(language);
}));

function createNavbarDropdown() {
    document.getElementById("navbar-dropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}

function createNavbarDropdownMobile() {
    document.getElementById("navbar-dropdown-mobile").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn-mobile')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-mobile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}

var isMobileMenuOpen = false;
function toggleMobileMenu(menu){
    var navbar = document.querySelector("#navbar");
    var barContainer = document.querySelector("#bar-container");
    var dropdownMobile = document.querySelector(".dropdown-mobile");
    menu.classList.toggle("open");
    if(isMobileMenuOpen==false){
    navbar.style.height = "430px";
    navbar.style.flexDirection = "column";
    barContainer.style.top = "105px";
    barContainer.style.marginRight = "0";
    dropdownMobile.style.top = "0";
    dropdownMobile.style.marginLeft = "0";
    isMobileMenuOpen = true;
    }
    else{
        navbar.style.height = "12vh";
        navbar.style.flexDirection = "row";
        barContainer.style.top = "0";
        barContainer.style.marginRight = "20px";
        dropdownMobile.style.top = "5px";
        dropdownMobile.style.marginLeft = "auto";
        isMobileMenuOpen = false;
    }
}