function configurePageLanguage(language){
    //variables to choose elements that contain a text to be translated:
    var dropbtn = document.querySelector("#navbar .dropbtn");
    var dropdownContent = document.querySelector("#navbar .dropdown .dropdown-content");

    var navbarMenuItems = document.querySelectorAll("#main-menu li");

    var introductoryH1 = document.querySelector("#introductory-section h1");
    var introductoryH3 = document.querySelector("#introductory-section #general-part h3");
    var missionP = document.querySelector("#introductory-section #mission p");
    var missionLi = document.querySelectorAll("#introductory-section #mission ul li");
    var missionButton = document.querySelector("#introductory-section #mission a");

    var mentorshipSectionQuestion = document.querySelector("#mentorship-section #question h2");
    var responsibilities = document.querySelectorAll("#mentorship-section #responsibilities .responsibility span");

    var lessonsTitle = document.querySelector("#lessons-section-title");
    var lessonsP = document.querySelector("#lesson-section-p");
    var lessons = document.querySelectorAll("#lessons-section .lesson span");

    var commentsTitle = document.querySelector("#comments-section #section-title h2");
    var commentsP = document.querySelectorAll("#comments-section .slider .comments-all .comment p");

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
        var enNavbarMenuItems = ["Ana Sayfa", "Hakkımızda", "2024-2025 Eğitim Yılı Süreci", "Hizmetlerimiz", "Sponsorlarımız", "İletişim"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }

        //Changing the language of the introductory section
        introductoryH1.innerHTML = "LGS <br> Arkadaşım";
        introductoryH3.innerText = "Birlikte Başaralım!";
        missionP.innerHTML = "<b>Projenin misyonu</b>; <br> Türkiye’nin dört bir yanındaki LGS öğrencilerine:";

        var enMissionLi = ["özel ders,", "bire bir mentorluk,", "deneme tecrübesi", "ve çok daha fazlasını sağlamaktır."];
        for(var i=0;i<missionLi.length;i++){
            missionLi[i].innerText = enMissionLi[i];
        }
        missionButton.innerHTML = 'Daha Fazla Bilgi Edinin <i class="fa-solid fa-arrow-right"></i>';

        //Changing the language of the mentorship responsibilities section
        mentorshipSectionQuestion.innerHTML = "Mentor Görevleri <br>Nelerdir?"

        var enResponsibilities = ["Öğrencisi ile her hafta iletişim kuracak.", 
        "Haftalık yapılacak olan online denemelerin online sistemimiz üzerinden hazırlanan kazanım analizlerine bakarak öğrencilerine ödev verirler.",
        "Öğrencisine moral ve motivasyon verecektir."];
        for(var i=0;i<responsibilities.length;i++){
            responsibilities[i].innerText = enResponsibilities[i];
        }

        //Changing the language of the lessons section
        lessonsTitle.innerText = "Öğrencilerin Destek Alabileceği Dersler";
        lessonsP.innerText = "Liseye Geçiş Sınavı'nın içinde olan bütün derslerden programda destek alabiliyorsunuz.";
        var enLessons = ["Türkçe", "Matematik", "Fen Bilimleri", "T.C. İnkılap Tarihi ve Atatürkçülük", "Din Kültürü ve Ahlak Bilgisi", "İngilizce"];
        for(var i=0;i<lessons.length;i++){
            lessons[i].innerText = enLessons[i];
        }

        /*Changing the language of the comments section
        commentsTitle.innerHTML = "Geçmiş Öğrencilerimizin <br>Yorumları";
        var enCommentsP = ['“Gerek mentörlerimizin ilgisi gerekse arkadaşlarımla aramızdaki etkileşimle sınav sürecinde bana yardımcı oldu. Sınav sonrasında da mentörlerimiz tercih sürecinde bize destek oldular.”',
        '“Online denemelerde hangi konuda eksiğin olduğunu anlayabiliyorsun ve eksik konu tamamlama konusunda çok yardımcı bir program.”'];
        for(var i=0;i<commentsP.length;i++){
            commentsP[i].innerText = enCommentsP[i];
        }*/

        //Changing the language of the footer section
        formPartTitle.innerText = "Bize Ulaşın:";
        formPartSpan.innerText = "Herhangi bir sorunuz olursa aşağıdaki linkte bulunan formu doldurabilirsiniz.";
        formPartA.innerText = "İletişim Formu";
        var enBottomNavbarElements = ["Ana Sayfa", "Hakkımızda", "2024-2025 Eğitim Yılı Süreci", "Hizmetlerimiz", "Sponsorlarımız"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = enBottomNavbarElements[i];
        }
    }
    else if(language=="EN"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/united-states.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/united-states.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var enNavbarMenuItems = ["Main Page", "About Us", "Academic Year Schedule", "Private Lesson", "Sponsors", "Contact Us"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }

        //Changing the language of the introductory section
        introductoryH1.innerHTML = "My LGS <br> Friend";
        introductoryH3.innerText = "Let's Achieve Together!";
        missionP.innerHTML = "<b>The mission of the project</b>; <br> is to provide to 8th grade students from all over Turkey:";

        var enMissionLi = ["private tuition,", "one on one mentoring,", "exam practice", "and so much more"];
        for(var i=0;i<missionLi.length;i++){
            missionLi[i].innerText = enMissionLi[i];
        }
        missionButton.innerHTML = 'Learn More About Us <i class="fa-solid fa-arrow-right"></i>';

        //Changing the language of the mentorship responsibilities section
        mentorshipSectionQuestion.innerHTML = "What are the duties <br>of a mentor?"

        var enResponsibilities = ["The mentor will communicate with their student by calling them every week.", 
        "The mentor will give their student homework on the subject that requires help by looking at the analysis of the online exams every week.",
        "The mentors will give their students morale and motivation."];
        for(var i=0;i<responsibilities.length;i++){
            responsibilities[i].innerText = enResponsibilities[i];
        }

        //Changing the language of the lessons section
        lessonsTitle.innerText = "Classes that Students can Take Support on";
        lessonsP.innerText = "You can get support for all the classes included in the High School Entrance Exam.";
        var enLessons = ["Turkish", "Mathematics", "Science", "History of Turkish Revolution", "Religious Culture", "English"];
        for(var i=0;i<lessons.length;i++){
            lessons[i].innerText = enLessons[i];
        }

        /*Changing the language of the comments section
        commentsTitle.innerHTML = "Comments from our <br>Students";
        var enCommentsP = ['“Both the interest of our mentors and the interaction with my friends helped me during the exam year. After the exam, our mentors supported us during the high school selection process.”',
        '“You could understand what topics you are missing from the online exams and it is a very advantegous program for completing missing topics.”'];
        for(var i=0;i<commentsP.length;i++){
            commentsP[i].innerText = enCommentsP[i];
        }*/

        //Changing the language of the footer section
        formPartTitle.innerText = "Contact Us:";
        formPartSpan.innerText = "If you have any questions, you can fill out the form in the link below.";
        formPartA.innerText = "Message Form";
        var enBottomNavbarElements = ["Main Page", "About Us", "Academic Year Schedule", "Private Lesson", "Sponsors"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = enBottomNavbarElements[i];
        }
    }
    else if(language=="DE"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/germany.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/germany.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var enNavbarMenuItems = ["Startseite", "Über Uns", "Kalender des akademischen Jahres", "Privatunterricht", "Sponsoren", "Kontakt"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }

        //Changing the language of the introductory section
        introductoryH1.innerHTML = "Mein LGS <br> Freund";
        introductoryH3.innerText = "Lasst uns gemeinsam erfolgreich sein!";
        missionP.innerHTML = "<b>Die Mission des Projekts</b>; <br> ist, an Achtklässler in der ganzen Türkei zu versorgen mit:";

        var enMissionLi = ["Privatunterricht,", "Einzelmentoring,", "Prüfungspraxis", "und vielem mehr"];
        for(var i=0;i<missionLi.length;i++){
            missionLi[i].innerText = enMissionLi[i];
        }
        missionButton.innerHTML = 'Mehr über uns erfahren <i class="fa-solid fa-arrow-right"></i>';

        //Changing the language of the mentorship responsibilities section
        mentorshipSectionQuestion.innerHTML = "Welche Aufgaben <br>hat ein Mentor?"

        var enResponsibilities = ["Der Mentor wird jede Woche mit dem Schüler kommunizieren.", 
        "Der Mentor gibt seinen Schülern Hausaufgaben zu dem Thema, das Hilfe benötigt, indem er sich jede Woche die Analyse der Online-Prüfungen ansieht.",
        "Die Mentoren geben ihren Schülern Motivation."];
        for(var i=0;i<responsibilities.length;i++){
            responsibilities[i].innerText = enResponsibilities[i];
        }

        //Changing the language of the lessons section
        lessonsTitle.innerText = "Klassen Studenten können Unterstützung erhalten";
        lessonsP.innerText = "Sie können Unterstützung für alle Klassen der High School Aufnahmeprüfung erhalten.";
        var enLessons = ["Türkisch", "Mathematik", "Naturwissenschaft", "Geschichte der türkischen Revolution", "Religiöse Kultur", "Englisch"];
        for(var i=0;i<lessons.length;i++){
            lessons[i].innerText = enLessons[i];
        }

        /*Changing the language of the comments section
        commentsTitle.innerHTML = "Bewertungen von ehemaligen <br>Studenten";
        var enCommentsP = ['“Sowohl das Interesse unserer Mentoren als auch die Interaktion mit meinen Freunden halfen mir während des Prüfungsjahres. Nach der Prüfung unterstützten uns unsere Mentoren während des Auswahlprozesses.”',
        '"Sie könnten verstehen, welche Themen Sie in den Online-Prüfungen vermissen, und es ist ein sehr vorteilhaftes Programm zum Ausfüllen fehlender Themen."'];
        for(var i=0;i<commentsP.length;i++){
            commentsP[i].innerText = enCommentsP[i];
        }*/

        //Changing the language of the footer section
        formPartTitle.innerText = "Kontakt:";
        formPartSpan.innerText = "Wenn Sie Fragen haben, können Sie das Formular auf dem Link unten ausfüllen.";
        formPartA.innerText = "Kontaktformular";
        var enBottomNavbarElements = ["Startseite", "Über Uns", "Kalender des akademischen Jahres", "Privatunterricht", "Sponsoren"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = enBottomNavbarElements[i];
        }
    }
    else if(language=="ES"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/spain.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/spain.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var enNavbarMenuItems = ["Página de Inicio", "Sobre Nosotros", "Calendario del Año Académico", "Lección Privada", "Patrocinadores", "Contacto"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }

        //Changing the language of the introductory section
        introductoryH1.innerHTML = "Mi LGS <br> Amigo";
        introductoryH3.innerText = "Vamos a lograr juntos!";
        missionP.innerHTML = "<b>La misión del proyecto</b>; <br> proporcionar a estudiantes de octavo grado en toda Turquía:";

        var enMissionLi = ["clases particulares,", "tutoría individual,", "práctica de examen", "y mucho más"];
        for(var i=0;i<missionLi.length;i++){
            missionLi[i].innerText = enMissionLi[i];
        }
        missionButton.innerHTML = 'Aprender Más Sobre Nosotros <i class="fa-solid fa-arrow-right"></i>';

        //Changing the language of the mentorship responsibilities section
        mentorshipSectionQuestion.innerHTML = "Cuáles son las responsabilidades <br>de un mentor?"

        var enResponsibilities = ["El mentor se comunicará con su estudiante llamándolos cada semana", 
        "El mentor le dará a su estudiante tarea sobre el tema que requiere ayuda mirando el análisis de los exámenes en línea cada semana",
        "Los mentores darán motivación a sus estudiantes"];
        for(var i=0;i<responsibilities.length;i++){
            responsibilities[i].innerText = enResponsibilities[i];
        }

        //Changing the language of the lessons section
        lessonsTitle.innerText = "Clases en las que los estudiantes pueden recibir apoyo";
        lessonsP.innerText = "Usted puede obtener apoyo para todas las clases incluidas en el examen de ingreso a la escuela secundaria.";
        var enLessons = ["Turco", "Matemático", "Ciencia", "Historia de la Revolución Turca", "Cultura Religiosa", "Inglés"];
        for(var i=0;i<lessons.length;i++){
            lessons[i].innerText = enLessons[i];
        }

        /*Changing the language of the comments section
        commentsTitle.innerHTML = "Reseñas de Nuestros <br>Estudiantes Anteriores";
        var enCommentsP = ['“Tanto el interés de nuestros mentores como la interacción con mis amigos me ayudaron durante el año del examen. Después del examen, nuestros mentores nos apoyaron durante el proceso de selección de la escuela secundaria.”',
        '"Podría entender qué temas le faltan en los exámenes en línea y es un programa muy ventajoso para completar los temas que faltan."'];
        for(var i=0;i<commentsP.length;i++){
            commentsP[i].innerText = enCommentsP[i];
        }*/

        //Changing the language of the footer section
        formPartTitle.innerText = "Contacto:";
        formPartSpan.innerText = "Si tiene alguna pregunta, puede rellenar el formulario en el siguiente enlace.";
        formPartA.innerText = "Formulario de Mensaje";
        var enBottomNavbarElements = ["Página de Inicio", "Sobre Nosotros", "Calendario del Año Académico", "Lección Privada", "Patrocinadores"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = enBottomNavbarElements[i];
        }  
    }
    else if(language=="FR"){
        //Changing the language of the dropdown menu
        dropbtn.innerHTML = '<img src="assets/flags/france.png">'+language+'<i class="fa-solid fa-caret-down"></i>';
        mobileDropbtn.innerHTML = '<img src="assets/flags/france.png">'+language+'<i class="fa-solid fa-caret-down"></i>';

        //Changing the language of the navbar menu items
        var enNavbarMenuItems = ["Page d’accueil", "Sur Nous", "Calendrier de l’année Scolaire", "Cours Privé", "Sponsors", "Nous Contacter"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = enNavbarMenuItems[i];
        }

        //Changing the language of the introductory section
        introductoryH1.innerHTML = "Mon LGS <br> Ami";
        introductoryH3.innerText = "Réussissons Ensemble!";
        missionP.innerHTML = "<b>La mission du projet</b>; <br> est aux élèves de huitième année dans toute la Turquie:";

        var enMissionLi = ["cours particulier,", "un sur un mentorat,", "pratique des examens", "et bien plus encore"];
        for(var i=0;i<missionLi.length;i++){
            missionLi[i].innerText = enMissionLi[i];
        }
        missionButton.innerHTML = 'En Savoir Plus Sur Nous <i class="fa-solid fa-arrow-right"></i>';

        //Changing the language of the mentorship responsibilities section
        mentorshipSectionQuestion.innerHTML = "Quelles sont les <br>fonctions d’un mentor?"

        var enResponsibilities = ["Le mentor communiquera avec son élève en l’appelant chaque semaine.", 
        "Le mentor donnera à son élève des devoirs sur le sujet qui nécessite de l’aide en examinant l’analyse des examens en ligne chaque semaine.",
        "Les mentors donneront de la motivation à leurs étudiants."];
        for(var i=0;i<responsibilities.length;i++){
            responsibilities[i].innerText = enResponsibilities[i];
        }

        //Changing the language of the lessons section
        lessonsTitle.innerText = "Cours pour les étudiants pour obtenir du soutien";
        lessonsP.innerText = "Vous pouvez obtenir du soutien pour toutes les classes incluses dans l’examen d’entrée au lycée.";
        var enLessons = ["Turc", "Mathématique", "Science", "Histoire de la Révolution Turque", "Culture Religieuse", "Anglaise"];
        for(var i=0;i<lessons.length;i++){
            lessons[i].innerText = enLessons[i];
        }

        /*Changing the language of the comments section
        commentsTitle.innerHTML = "Commentaires de nos <br>étudiants";
        var enCommentsP = ['“L’intérêt de nos mentors et l’interaction avec mes amis m’ont aidé pendant l’année d’examen. Après l’examen, nos mentors nous ont soutenus pendant le processus de sélection du lycée.”',
        '“Vous pourriez comprendre quels sujets vous manquent dans les examens en ligne et c’est un programme très avantageux pour compléter les sujets manquants.”'];
        for(var i=0;i<commentsP.length;i++){
            commentsP[i].innerText = enCommentsP[i];
        }*/

        //Changing the language of the footer section
        formPartTitle.innerText = "Nous Contacter:";
        formPartSpan.innerText = "Si vous avez des questions, vous pouvez remplir le formulaire ci-dessous.";
        formPartA.innerText = "Formulaire de Message";
        var enBottomNavbarElements = ["Page d’accueil", "Sur Nous", "Calendrier de l’année Scolaire", "Cours Privé", "Sponsors"];
        for(var i=0;i<bottomNavbarElements.length;i++){
            bottomNavbarElements[i].innerText = enBottomNavbarElements[i];
        }
    }
}
