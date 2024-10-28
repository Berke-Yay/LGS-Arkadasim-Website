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
        introductoryP.innerText = "2021'de kurulmuş bir proje olan ​LGS Arkadaşım, Türkiye'nin dört bir yanından aldığı 8. sınıf öğrencilerine bire bir mentorluk hizmeti sunarak ve deneme pratiği kazandırarak öğrencilerin LGS yolculuklarında tam potansiyellerine ulaşmalarını sağlıyor.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Bizi diğer programlardan neler ayırır?";
        var newDifferentSectionSpans = ["Kaliteli bir Ekip", "Mentörlük", "Denemeler", "Haftalık Dersler", "Tercih Sürecinde Destek"];
        var newDifferentSectionPs = ["Ekibimizdeki mentörler; yapılan mülakatlar sonucunda Koç Lisesi, Galatasaray Lisesi, Robert Koleji, İstanbul Erkek Lisesi ve Kabataş Erkek Lisesi gibi Türkiye'nin en seçkin liselerinden seçilir.",
        "Her öğrencinin kendi mentörü vardır. Mentörler, öğrencileriyle düzenli olarak iletişim kurup onların sorularını cevaplar, tavsiyelerde bulunur. Mentörler aynı zamanda öğrencilere dersleri dışında da yardımcı olur.",
        "Her hafta çeşitli yayınlardan deneme olunur ve mentörler öğrencilerine bu denemelerin kazanım analizlerine göre soru verir.",
        "Her ders için Zoom üzerinden bir sınıf açılır ve mentörlerimiz öğrencilerin yapamadıkları soruları çözerek derslerinde öğrencilere yardımcı olur.",
        "Mentörler öğrencilerine sınav bittikten sonra tercih döneminde de yardımcı olurlar, hangi liseyi seçecekleri konusunda yol gösterirler."];
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
        introductoryP.innerText = "Established in 2021, LGS Arkadaşım (My LGS Friend) is a project that aims to help 8th graders all around Turkey to reach their full potentials in their LGS(High School Entrance Exam) journey via offering students one-to-one mentorship and lots of exam practices.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "What Seperates Us from Other Programs?";
        var newDifferentSectionSpans = ["A Qualified Team", "Mentorship", "Exams", "Weekly Lessons", "Support on Decision Period"];
        var newDifferentSectionPs = ["Mentors in our team are selected after a careful process of interviews from outstanding high schools of Turkey such as Koç High School, Galatasaray High School and Robert College.",
        "Each student has their own mentor. Mentors contact their students on a regular basis, and they answer the students' questions, giving them some advice. Mentors also help their students outside of academics.",
        "There is an exam every week and the mentors give homework to their students based on the exam analysis.",
        "There will be weekly classes held on Zoom for each lesson where our mentors will help the students solve the questions they had a hard time with.",
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
        introductoryP.innerText = "LGS Arkadaşım (Mein LGS Freund) wurde 2021 initiiert und ist ein Projekt, das Achtklässlern in der ganzen Türkei helfen soll, ihr volles Potenzial in ihrer High School Aufnahmeprüfung zu erreichen, indem sie den Schülern Mentorenschaft und viele Prüfungspraktiken anbieten.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Was unterscheidet uns von anderen Programmen?";
        var newDifferentSectionSpans = ["Ein Qualifiziertes Team", "Mentorenschaft", "Prüfungen", "Privatunterricht", "Unterstützung bei der Beschlussfassung"];
        var newDifferentSectionPs = ["Die Mentoren in unserem Team werden nach einem sorgfältigen Prozess von Interviews von herausragenden Schulen der Türkei wie Koç High School, Galatasaray High School und Robert College ausgewählt.",
        "Jeder Schüler hat seinen eigenen Mentor. Mentorinnen und Mentoren nehmen regelmäßig Kontakt zu ihren Studierenden auf, beantworten die Fragen der Studierenden und geben Tipps. Mentoren helfen ihren Studierenden auch außerhalb der Wissenschaft.",
        "Es gibt jede Woche eine Prüfung und die Mentoren geben ihren Schülern basierend auf der Prüfungsanalyse Hausaufgaben.",
        "Schüler können gegen eine bestimmte Gebühr Privatunterricht bei unseren Mentoren nehmen, die an qualifizierten Gymnasien in der Türkei studieren. Die Einnahmen aus Privatstunden werden dazu verwendet, Bücher an benachteiligte Schüler zu spenden.",
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
        var newBottomNavbarElements = ["Startseite", "Über Uns", "Kalender des akademischen Jahres", "Sponsoren"];
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
        introductoryP.innerText = "My LGS Friend, un proyecto establecido en 2021, permite a los estudiantes alcanzar su máximo potencial en su viaje LGS al brindar un servicio de tutoría individual y práctica de prueba a estudiantes de octavo grado de toda Turquía.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Qué nos separa de otros programas?";
        var newDifferentSectionSpans = ["Un Equipo Cualificado", "Mentoría", "Exámenes", "Lección Privada", "Apoyo Sobre el Período de Decisión"];
        var newDifferentSectionPs = ["Los mentores de nuestro equipo son seleccionados después de un cuidadoso proceso de entrevistas de escuelas secundarias sobresalientes de Turquía como Koç Secundaria, Galatasaray Secundaria y Robert College",
        "Cada estudiante tiene su propio mentor. Los mentores contactan a sus estudiantes de forma regular, y responden a las preguntas de los estudiantes, dándoles algunos consejos. Los mentores también ayudan a sus estudiantes fuera de lo académico.",
        "Hay un examen cada semana y los mentores dan tarea a sus estudiantes en base al análisis del examen.",
        "Los estudiantes pueden tomar lecciones privadas por una tarifa determinada con nuestros mentores que estudian en escuelas secundarias calificadas en Turquía. Los ingresos de las lecciones privadas se utilizarán para donar libros a estudiantes desfavorecidos.",
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
        var newBottomNavbarElements = ["Página de Inicio", "Sobre Nosotros", "Calendario del Año Académico", "Patrocinadores"];
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
        introductoryP.innerText = "LGS Arkadaşım, un projet créé en 2021, permet aux étudiants d'atteindre leur plein potentiel dans leur parcours LGS en fournissant un service de mentorat individuel et des essais pratiques aux élèves de 8e année de toute la Turquie.";

        //Changing the language of what makes us different section
        differentSectionTitle.innerText = "Qu’est-ce Qui Nous Sépare des Autres Programmes?";
        var newDifferentSectionSpans = ["Une Equipe Qualifiée", "Mentorat", "Examens", "Cours Privé", "Soutien à la Période de Décision"];
        var newDifferentSectionPs = ["Les mentors de notre équipe sont sélectionnés après un processus minutieux d’entretiens avec des lycées exceptionnels de Turquie tels que le lycée Koç, le lycée Galatasaray et le collège Robert.",
        "Chaque étudiant a son propre mentor. Les mentors communiquent régulièrement avec leurs étudiants et ils répondent aux questions des étudiants en leur donnant des conseils. Les mentors aident également leurs étudiants en dehors des matières académiques.",
        "Il y a un examen chaque semaine et les mentors donnent des devoirs à leurs étudiants en fonction de l’analyse de l’examen.",
        "Les étudiants peuvent suivre des cours particuliers moyennant un certain montant auprès de nos mentors qui étudient dans des lycées qualifiés en Turquie. Les revenus des cours particuliers serviront à faire don de livres à des élèves défavorisés.",
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
