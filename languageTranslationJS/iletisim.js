function configurePageLanguage(language){
    //variables to choose elements that contain a text to be translated:
    var dropbtn = document.querySelector("#navbar .dropbtn");
    var dropdownContent = document.querySelector("#navbar .dropdown .dropdown-content");

    var navbarMenuItems = document.querySelectorAll("#main-menu li");

    var formPartTitle = document.querySelector("#footer-section #contact-us-section #form-part h2");
    var formPartSpan = document.querySelector("#footer-section #contact-us-section #form-part span");
    var formPartLabels = document.querySelectorAll("#form-part #form-section label");
    var formPartInputs = document.querySelectorAll("#form-part #form-section input");
    var formPartTextArea = document.querySelector("textarea");
    var submitButton = document.querySelector("#form-part #form-section #submit-btn");
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
        var newNavbarMenuItems = ["Ana Sayfa", "Hakkımızda", "2024-2025 Eğitim Yılı Süreci", "Sponsorlarımız", "İletişim"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }

        //Changing the language of the footer section
        formPartTitle.innerText = "Bize Ulaşın:";
        formPartSpan.innerText = "Herhangi bir sorunuz olursa aşağıdaki iletişim formunu doldurabilirsiniz.";
        var newBottomNavbarElements = ["Ana Sayfa", "Hakkımızda", "2024-2025 Eğitim Yılı Süreci", "Sponsorlarımız"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }

        //Changing the language of form section
        var newFormPartLabels = ["Adınız ve Soyadınız:", "E-posta Adresiniz:","Mesajınız:"];
        for(var i=0;i<formPartLabels.length;i++){
            formPartLabels[i].innerText = newFormPartLabels[i];
        }

        var newFormPartInputs = ["Lütfen adınızı ve soyadınızı girin", "Lütfen e-posta adresinizi girin"];
        for(var i=0;i<formPartInputs.length;i++){
            formPartInputs[i].placeholder = newFormPartInputs[i];
        }

        formPartTextArea.placeholder="Mesajınızı bu alana yazabilirsiniz";
        submitButton.value = "Gönder";
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

        //Changing the language of the footer section
        formPartTitle.innerText = "Contact Us:";
        formPartSpan.innerText = "If you have any questions, you can fill out the message form below.";
        var newBottomNavbarElements = ["Main Page", "About Us", "Academic Year Schedule", "Sponsors"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }

        //Changing the language of form section
        var newFormPartLabels = ["Your Name and Surname:", "Email:","Your Message:"];
        for(var i=0;i<formPartLabels.length;i++){
            formPartLabels[i].innerText = newFormPartLabels[i];
        }

        var newFormPartInputs = ["Please enter your name and surname", "Please enter your email"];
        for(var i=0;i<formPartInputs.length;i++){
            formPartInputs[i].placeholder = newFormPartInputs[i];
        }

        formPartTextArea.placeholder="You can write your message in this area";
        submitButton.value = "Submit";
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

        //Changing the language of the footer section
        formPartTitle.innerText = "Kontakt:";
        formPartSpan.innerText = "Wenn Sie Fragen haben, können Sie das Nachrichtenformular unten ausfüllen.";
        var newBottomNavbarElements = ["Startseite", "Über Uns", "Kalender des akademischen Jahres", "Sponsoren"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }

        //Changing the language of form section
        var newFormPartLabels = ["Ihr Vorname und Nachname:", "Email:","Ihre Nachricht:"];
        for(var i=0;i<formPartLabels.length;i++){
            formPartLabels[i].innerText = newFormPartLabels[i];
        }

        var newFormPartInputs = ["Bitte geben Sie Ihren Vorname und Nachname ein", "Bitte geben Sie Ihre E-Mail-Adresse ein"];
        for(var i=0;i<formPartInputs.length;i++){
            formPartInputs[i].placeholder = newFormPartInputs[i];
        }

        formPartTextArea.placeholder="Sie können Ihre Nachricht in diesem Bereich schreiben";
        submitButton.value = "Senden";
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

        //Changing the language of the footer section
        formPartTitle.innerText = "Contacto:";
        formPartSpan.innerText = "Si tiene alguna pregunta, puede llenar el siguiente formulario de mensaje.";
        var newBottomNavbarElements = ["Página de Inicio", "Sobre Nosotros", "Calendario del Año Académico", "Patrocinadores"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }

        //Changing the language of form section
        var newFormPartLabels = ["Su Nombre y Apellidos:", "Email:","Su Mensaje:"];
        for(var i=0;i<formPartLabels.length;i++){
            formPartLabels[i].innerText = newFormPartLabels[i];
        }

        var newFormPartInputs = ["Por favor, introduzca su nombre y apellidos", "Por favor, introduzca su email"];
        for(var i=0;i<formPartInputs.length;i++){
            formPartInputs[i].placeholder = newFormPartInputs[i];
        }

        formPartTextArea.placeholder="Puede escribir su mensaje en esta área";
        submitButton.value = "Enviar";
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

        //Changing the language of the footer section
        formPartTitle.innerText = "Nous Contacter:";
        formPartSpan.innerText = "Si vous avez des questions, vous pouvez remplir le formulaire ci-dessous.";
        var newBottomNavbarElements = ["Page d’accueil", "Sur Nous", "Calendrier de l’année Scolaire", "Sponsors"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = newBottomNavbarElements[i];
        }

        //Changing the language of form section
        var newFormPartLabels = ["Votre nom et prénom:", "Email:","Votre message:"];
        for(var i=0;i<formPartLabels.length;i++){
            formPartLabels[i].innerText = newFormPartLabels[i];
        }

        var newFormPartInputs = ["Veuillez entrer votre nom et prénom", "Veuillez entrer votre e-mail"];
        for(var i=0;i<formPartInputs.length;i++){
            formPartInputs[i].placeholder = newFormPartInputs[i];
        }

        formPartTextArea.placeholder="Vous pouvez écrire votre message dans cette zone";
        submitButton.value = "Soumettre";
    }
}
