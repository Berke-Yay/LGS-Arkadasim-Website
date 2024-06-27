function configurePageLanguage(language){
    //variables to choose elements that contain a text to be translated:
    var dropbtn = document.querySelector("#navbar .dropbtn");
    var dropdownContent = document.querySelector("#navbar .dropdown .dropdown-content");

    var navbarMenuItems = document.querySelectorAll("#main-menu li");

    var introductoryTitle = document.querySelector("#introductory-part h1");
    var introductoryP = document.querySelector("#introductory-part .info-section p");

    var differentSectionTitle = document.querySelector("#what-makes-us-different-section h2");
    var differentSectionSpans = document.querySelectorAll("#what-makes-us-different-section #elements .element span");
    var differentSectionPs = document.querySelectorAll("#what-makes-us-different-section #elements .element p");

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
        var newNavbarMenuItems = ["Ana Sayfa", "Hakkımızda", "2024-2025 Eğitim Yılı Süreci", "Sponsorlarımız", "İletişim"];
        for(var i=0;i<navbarMenuItems.length;i++){
            navbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }
        for(var i=0;i<mobileNavbarMenuItems.length;i++){
            mobileNavbarMenuItems[i].innerText = newNavbarMenuItems[i];
        }

        //Changing the language of the title and info section
        introductoryTitle.innerText = "Hakkımızda";
        introductoryP.innerText = "Koç Lisesi tabanlı, 2021'de kurulmuş bir proje olan ​LGS Arkadaşım, Türkiye'nin dört bir yanından aldığı 8. sınıf öğrencilerine ücretsiz bir şekilde bire bir mentorluk hizmeti sunarak ve deneme pratiği kazandırarak öğrencilerin LGS yolculuklarında tam potansiyellerine ulaşmalarını sağlıyor.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Bizi diğer programlardan neler ayırır?";
        var newDifferentSectionSpans = ["Kaliteli bir Ekip", "Mentorluk", "Denemeler", "Küçük Sınıflarda Dersler", "Tercih Sürecinde Destek"];
        var newDifferentSectionPs = ["Ekibimizdeki mentorlar; yapılan mülakatlar sonucunda Koç Lisesi, Galatasaray Lisesi, Robert Koleji gibi Türkiye'nin en seçkin liselerinden seçilir.",
        "Her öğrencinin kendi mentoru vardır. Mentorlar, öğrencileriyle düzenli olarak iletişim kurup onların sorularını cevaplar, tavsiyelerde bulunur. Mentorlar aynı zamanda öğrencilere dersleri dışında da yardımcı olur.",
        "Her hafta çeşitli yayınlardan deneme olunur ve mentorlar öğrencilerine bu denemelerin kazanım analizlerine göre soru verir.",
        "Her ders için ayrı bir sınıf açılır, öğrenciler yapamadıkları soruları atarlar ve Zoom'da küçük bir sınıf halinde o sınıftaki öğrencilerin soruları haftalık derslerde çözülür.",
        "Mentorlar öğrencilerine sınav bittikten sonra tercih döneminde de yardımcı olurlar, hangi liseyi seçecekleri konusunda yol gösterirler."];
        for(var i=0;i<differentSectionSpans.length;i++){
            differentSectionSpans[i].innerText = newDifferentSectionSpans[i];
            differentSectionPs[i].innerText = newDifferentSectionPs[i];
        }

        //Changing the language of the footer section
        formPartTitle.innerText = "Bize Ulaşın:";
        formPartSpan.innerText = "Herhangi bir sorunuz olursa aşağıdaki linkte bulunan formu doldurabilirsiniz.";
        formPartA.innerText = "İletişim Formu";
        var newBottomNavbarElements = ["Ana Sayfa", "Hakkımızda", "2024-2025 Eğitim Yılı Süreci", "Sponsorlarımız"];
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

        //Changing the language of the title and info section
        introductoryTitle.innerText = "About Us";
        introductoryP.innerText = "Initiated from Koç High School and established in 2021, LGS Arkadaşım (My LGS Friend) is a project that aims to help 8th graders all around Turkey to reach their full potentials in their LGS(High School Entrance Exam) journey via offering students a free of cost one-to-one mentorship and lots of exam practices.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "What Seperates Us from Other Programs?";
        var newDifferentSectionSpans = ["A Qualified Team", "Mentorship", "Exams", "Lessons in Small Classes", "Support on Decision Period"];
        var newDifferentSectionPs = ["Mentors in our team are selected after a careful process of interviews from outstanding high schools of Turkey such as Koç High School, Galatasaray High School and Robert College.",
        "Each student has their own mentor. Mentors contact their students on a regular basis, and they answer the students' questions, giving them some advice. Mentors also help their students outside of academics.",
        "There is an exam every week and the mentors give homework to their students based on the exam analysis.",
        "A separate class is opened for each subject, the students send the questions they cannot do, and these questions are solved in a small class on Zoom in weekly lessons.",
        "Mentors keep guiding their students after the exam, helping them to choose the right high school for their interests and goals."];
        for(var i=0;i<differentSectionSpans.length;i++){
            differentSectionSpans[i].innerText = newDifferentSectionSpans[i];
            differentSectionPs[i].innerText = newDifferentSectionPs[i];
        }

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

        //Changing the language of the title and info section
        introductoryTitle.innerText = "Über Uns";
        introductoryP.innerText = "LGS Arkadaşım (Mein LGS Freund) wurde 2021 von der Koç High School initiiert und ist ein Projekt, das Achtklässlern in der ganzen Türkei helfen soll, ihr volles Potenzial in ihrer High School Aufnahmeprüfung zu erreichen, indem sie den Schülern eine kostenlose Mentorenschaft und viele Prüfungspraktiken anbieten.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Was unterscheidet uns von anderen Programmen?";
        var newDifferentSectionSpans = ["Ein Qualifiziertes Team", "Mentorenschaft", "Prüfungen", "Unterricht in Kleinen Klassen", "Unterstützung bei der Beschlussfassung"];
        var newDifferentSectionPs = ["Die Mentoren in unserem Team werden nach einem sorgfältigen Prozess von Interviews von herausragenden Schulen der Türkei wie Koç High School, Galatasaray High School und Robert College ausgewählt.",
        "Jeder Schüler hat seinen eigenen Mentor. Mentorinnen und Mentoren nehmen regelmäßig Kontakt zu ihren Studierenden auf, beantworten die Fragen der Studierenden und geben Tipps. Mentoren helfen ihren Studierenden auch außerhalb der Wissenschaft.",
        "Es gibt jede Woche eine Prüfung und die Mentoren geben ihren Schülern basierend auf der Prüfungsanalyse Hausaufgaben.",
        "Für jedes Fach wird eine separate Klasse geöffnet, die Schüler senden die Fragen, die sie nicht tun können, und diese Fragen werden in einer kleinen Klasse auf Zoom in wöchentlichen Lektionen gelöst.",
        "Mentoren begleiten ihre Schüler nach der Prüfung und helfen ihnen, die richtige Schule für ihre Interessen und Ziele zu wählen."];
        for(var i=0;i<differentSectionSpans.length;i++){
            differentSectionSpans[i].innerText = newDifferentSectionSpans[i];
            differentSectionPs[i].innerText = newDifferentSectionPs[i];
           differentSectionSpans[i].style.textAlign = "center";
        }

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

        //Changing the language of the title and info section
        introductoryTitle.innerText = "Sobre Nosotros";
        introductoryP.innerText = "Iniciado por Koç High School en 2021, LGS Arkadaşım (Mi LGS Amigo) es un proyecto que tiene como objetivo ayudar a los estudiantes de octavo grado de todo Turquía a alcanzar su máximo potencial en su examen de ingreso a la escuela secundaria a través de ofrecer a los estudiantes una tutoría gratuita y muchas prácticas de exámenes.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Qué nos separa de otros programas?";
        var newDifferentSectionSpans = ["Un Equipo Cualificado", "Mentoría", "Exámenes", "Lecciones en Clases Pequeñas", "Apoyo Sobre el Período de Decisión"];
        var newDifferentSectionPs = ["Los mentores de nuestro equipo son seleccionados después de un cuidadoso proceso de entrevistas de escuelas secundarias sobresalientes de Turquía como Koç Secundaria, Galatasaray Secundaria y Robert College",
        "Cada estudiante tiene su propio mentor. Los mentores contactan a sus estudiantes de forma regular, y responden a las preguntas de los estudiantes, dándoles algunos consejos. Los mentores también ayudan a sus estudiantes fuera de lo académico.",
        "Hay un examen cada semana y los mentores dan tarea a sus estudiantes en base al análisis del examen.",
        "Se abre una clase separada para cada asignatura, los estudiantes envían preguntas difíciles, y estas preguntas se resuelven en una pequeña clase sobre Zoom en las lecciones semanales.",
        "Los mentores siguen guiando a sus estudiantes después del examen, ayudándoles a elegir la escuela secundaria adecuada para sus intereses y metas."];
        for(var i=0;i<differentSectionSpans.length;i++){
            differentSectionSpans[i].innerText = newDifferentSectionSpans[i];
            differentSectionPs[i].innerText = newDifferentSectionPs[i];
            differentSectionSpans[i].style.textAlign = "center";
        }

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

        //Changing the language of the title and info section
        introductoryTitle.innerText = "Sur Nous";
        introductoryP.innerText = "Initié à partir du lycée Koç en 2021, LGS Arkadaşım (Mon LGS Ami) est un projet qui vise à aider les élèves de 8e année de toute la Turquie à atteindre leur plein potentiel dans leur parcours LGS (Examen d’entrée au Secondaire) en offrant aux étudiants unun mentorat et beaucoup de pratiques d’examen.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Qu’est-ce Qui Nous Sépare des Autres Programmes?";
        var newDifferentSectionSpans = ["Une Equipe Qualifiée", "Mentorat", "Examens", "Leçons en Petites Classes", "Soutien à la Période de Décision"];
        var newDifferentSectionPs = ["Les mentors de notre équipe sont sélectionnés après un processus minutieux d’entretiens avec des lycées exceptionnels de Turquie tels que le lycée Koç, le lycée Galatasaray et le collège Robert.",
        "Chaque étudiant a son propre mentor. Les mentors communiquent régulièrement avec leurs étudiants et ils répondent aux questions des étudiants en leur donnant des conseils. Les mentors aident également leurs étudiants en dehors des matières académiques.",
        "Il y a un examen chaque semaine et les mentors donnent des devoirs à leurs étudiants en fonction de l’analyse de l’examen.",
        "Une classe séparée est ouverte pour chaque sujet, les étudiants envoient les questions qu’ils ne peuvent pas faire, et ces questions sont résolues dans une petite classe sur Zoom dans les leçons hebdomadaires.",
        "Les mentors continuent de guider leurs élèves après l’examen, les aidant à choisir la bonne école secondaire pour leurs intérêts et leurs objectifs."];
        for(var i=0;i<differentSectionSpans.length;i++){
            differentSectionSpans[i].innerText = newDifferentSectionSpans[i];
            differentSectionPs[i].innerText = newDifferentSectionPs[i];
            differentSectionSpans[i].style.textAlign = "center";
        }

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
