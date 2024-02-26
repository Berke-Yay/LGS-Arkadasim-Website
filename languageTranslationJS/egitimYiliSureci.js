function configurePageLanguage(language){
    //variables to choose elements that contain a text to be translated:
    var dropbtn = document.querySelector("#navbar .dropbtn");
    var dropdownContent = document.querySelector("#navbar .dropdown .dropdown-content");

    var navbarMenuItems = document.querySelectorAll("#main-menu li");

    var mainSectionTitle = document.querySelector("#main-section h1");

    var mainSectionImg1 = document.querySelector("#img1");
    var mainSectionImg2 = document.querySelector("#img2");
    //Changing the language of main content images
    mainSectionImg1.src = "assets//egitimYiliSureci/egitim_yili_sureci_"+language.toLowerCase()+"_1.png";
    mainSectionImg2.src = "assets//egitimYiliSureci/egitim_yili_sureci_"+language.toLowerCase()+"_2.png";

    var formPartTitle = document.querySelector("#footer-section #contact-us-section #form-part h2");
    var formPartSpan = document.querySelector("#footer-section #contact-us-section #form-part span");
    var formPartA = document.querySelector("#footer-section #contact-us-section #form-part a");
    var bottomNavbarElements = document.querySelectorAll("#footer-section #bottom-navbar li a");

    //Mobile variables
    var mobileDropbtn = document.querySelector("#navbar .dropbtn-mobile");
    var mobileDropdownContent = document.querySelector("#navbar .dropdown-mobile .dropdown-content-mobile");
    var mobileNavbarMenuItems = document.querySelectorAll(".mobile-menu li");

    //Close dropdown after each click
    dropdownContent.classList.remove("show");

    if(language=="TR"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/turkey.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/turkey.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var newNavbarMenuItems = ["Ana Sayfa", "Hakkımızda", "2023-2024 Eğitim Yılı Süreci", "Sponsorlarımız", "İletişim"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }

        //Changing the language of title
        mainSectionTitle.innerHTML = "2023 - 2024 <br>Eğitim Yılı Süreci";

        //Changing the language of the footer section
        formPartTitle.innerText = "Bize Ulaşın:";
        formPartSpan.innerText = "Herhangi bir sorunuz olursa aşağıdaki linkte bulunan formu doldurabilirsiniz.";
        formPartA.innerText = "İletişim Formu";
        var newBottomNavbarElements = ["Ana Sayfa", "Hakkımızda", "2023-2024 Eğitim Yılı Süreci", "Sponsorlarımız"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }
    }
    else if(language=="EN"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/united-states.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/united-states.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var newNavbarMenuItems = ["Main Page", "About Us", "Academic Year Schedule", "Sponsors", "Contact Us"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }

        //Changing the language of title
        mainSectionTitle.innerHTML = "2023 - 2024 <br>Academic Year Schedule";

        //Changing the language of the footer section
        formPartTitle.innerText = "Contact Us:";
        formPartSpan.innerText = "If you have any questions, you can fill out the form in the link below.";
        formPartA.innerText = "Message Form";
        var newBottomNavbarElements = ["Main Page", "About Us", "Academic Year Schedule", "Sponsors"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }
    }
    else if(language=="DE"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/germany.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/germany.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var newNavbarMenuItems = ["Startseite", "Über Uns", "Kalender des akademischen Jahres", "Sponsoren", "Kontakt"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }

        //Changing the language of title
        mainSectionTitle.innerHTML = "2023 - 2024 Kalender <br>des akademischen Jahres";

        //Changing the language of the footer section
        formPartTitle.innerText = "Kontakt:";
        formPartSpan.innerText = "Wenn Sie Fragen haben, können Sie das Formular auf dem Link unten ausfüllen.";
        formPartA.innerText = "Kontaktformular";
        var newBottomNavbarElements = ["Startseite", "Über Uns", "Kalender des akademischen Jahres", "Sponsoren", "Kontakt"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }
    }
    else if(language=="ES"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/spain.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/spain.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var newNavbarMenuItems = ["Página de Inicio", "Sobre Nosotros", "Calendario del Año Académico", "Patrocinadores", "Contacto"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }

        //Changing the language of title
        mainSectionTitle.innerHTML = "2023 - 2024 Calendario<br> del Año Académico";

        //Changing the language of the footer section
        formPartTitle.innerText = "Contacto:";
        formPartSpan.innerText = "Si tiene alguna pregunta, puede rellenar el formulario en el siguiente enlace.";
        formPartA.innerText = "Formulario de Mensaje";
        var newBottomNavbarElements = ["Página de Inicio", "Sobre Nosotros", "Calendario del Año Académico", "Patrocinadores", "Contacto"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }
    }
    else if(language=="FR"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/france.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/france.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var newNavbarMenuItems = ["Page d’accueil", "Sur Nous", "Calendrier de l’année Scolaire", "Sponsors", "Nous Contacter"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }

        //Changing the language of title
        mainSectionTitle.innerHTML = "2023 - 2024 Calendrier<br> de l’année Scolaire";

        //Changing the language of the footer section
        formPartTitle.innerText = "Nous Contacter:";
        formPartSpan.innerText = "Si vous avez des questions, vous pouvez remplir le formulaire ci-dessous.";
        formPartA.innerText = "Formulaire de Message";
        var newBottomNavbarElements = ["Page d’accueil", "Sur Nous", "Calendrier de l’année Scolaire", "Sponsors"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }
    }
}