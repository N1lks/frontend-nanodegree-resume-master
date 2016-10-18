
//$("#main").append(299792458 * 100 * 1 / 1000000000 );
// converte m/s para cm/ns (nanosegundo)
//var me = "I am daniel and i am AWESOME";
//var newMe = me.replace("AWESOME", "FUN");
//$("#main").append(newMe);
//console.log(me);

// ------------------ REPLACE, APPEND AND PREPEND -------------------

//var name = "Daniel";
//var role = "Developer Web";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").append(formattedRole); // APPEND ADICIONA O ITEM NO FIM
//$("#header").prepend(formattedName); // PREPEND ADICIONA O ITEM NO COMEÇO DE TUDO 

//---------------------- DESAFIO Manipulação de Strings Teste 1 ----------------------    

//var errado = "audacity"
//var correto = errado[1].toUpperCase() + errado.slice(2); // deixa o 'U' maiusculo e tirei as duas primeiras letras(a,u) do começo da varivel 'errado'
//console.log(correto);

//---------------------- Arrays ----------------------

//var i = [1,2,3,4];
//console.log(i[3] +1);

//var skills = ["awesomeness", "programming", "JS"];

//var bio = {
//    "name" : "Daniel",
//    "age": "18",
//    "skills" : skills
//}

//$("#main").append(bio.name);

//---------------------- QUIZ BIO ----------------------

//var bio = {
//    "name": "Daniel V.",
//    "role": "Web Developer",
//    "contacts": {
//        "mobile": "998789183",
//        "email": "daniel.anapro@gmail.com",
//        "github": "N1ilks",
//        "twitter": "N/D",
//        "location": "SP-BR"
//    },
//    "welcomeMessage" : "Bem vindo a minha biografia",
//    "skills" : ["awesomeness", "programming", "JS"],
//    "bioPic": "images/fry.jpg"
//}

//var work = {
//    "position": "ANAPRO",
//    "employer": "suporte",
//    "yaersWork": "2",
//}

//var education = {
//    "lastschool": "414", //name
//    "years": "2",
//    "city": "sp"
//}

//$("#main").append(work["position"] + " " + education.lastschool)


//---------------------- VALIDANDO O CODIGO JSON ----------------------

//var education = {
//    "schools" : [
//        { 
//            "school": "CEF 412",
//            "city": "Samambaia-df",
//            "majors": "N/D",
//            "minor" : "any",
//            "years" : "2011-2013"
//        },
//        {
//            "school": "CEM 414",
//            "city": "Samambaia-df",
//            "majors": "Ensino medio até 2° ano",
//            "minor": "any",
//            "years": "2014-2015"
//        }
//    ]
//}


//---------------------- lets 'GOOOOOOOOOO ----------------------

var work = {
    "jobs": [
        {
            "employer": "Casa",
            "title": "minha casa",
            "location" : "samambaia-df",
            "dates" : "1998-2015",
            "description" : "limpando e organizando tudo"
        },
        {
            "employer": "ANAPRO",
            "title": "gestao de vendas",
            "location" : "SP",
            "dates" : "2015-2016",
            "description" : "suporte"
        }
    ]
}

var projects = {
    "projects": [
        {
            "project": "controle de estoque",
            "title": "Estoque",
            "dates": "2015",
            "description": "BLA BLA BLA",
            "images": "../images/fry.jpg"
        },
                {
                    "project": "xxx X X X X xxx",
                    "title": "xxx Xxx",
                    "dates": "XX/XX/XXXX",
                    "description": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "images": "../images/fry.jpg"
                }
    ]
}

var bio = {
    "name": "Daniel Vasconcelos",
    "role": "Web Developer",
    "contacts": {
        "mobile": "998789183",
        "email": "daniel.anapro@gmail.com",
        "github": "N1ilks",
        "twitter": "N/D",
        "location": "SP-BR"
    },
    "welcomeMessage" : "Bem vindo a minha biografia",
    "skills" : ["awesomeness", "programming", "JS"],
}

var education = {
    "schools" : [
        { 
            "name": "CEF 412",
            "location": "Samambaia-df",
            "degree": "N/D degree",
            "majors": "N/D majors",
            "dates": "2011-2013",
            "ursal": "N/D url"
        },
        { 
            "name": "CEF 412",
            "location": "Samambaia-df",
            "degree": "N/D degree",
            "majors": "N/D majors",
            "dates": "2011-2013",
            "url": "N/D url"
        }
    ],
    "onlineCourses": [
        {
            "title": "C#",
            "school": "eib.net",
            "dates": "2014",
            "url" : "N/D url"
        }
    ]
}

if (bio.skills != null) {
    var skillsHeader = HTMLskillsStart;
    var skills = HTMLskills.replace("%data%", bio.skills);
    var pic = HTMLbioPic.replace("%data%", "../images/fry.jpg")
    $("#header").append(skillsHeader);
    $("#skills").append(skills);
    $("#header").append(pic);
}

function displayWork()
{
    for (var i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var employerTitle = employer + title;
        $(".work-entry:last").append(employerTitle);

        // OK
        var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(dates);

        var locations = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(locations);

        var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(description);
    }
}

displayWork();

$(document).click(function (loc) {
    logClicks(loc.pageX,loc.pageY);
});


function inName(name) {
    var newName = bio.name.split(" ");
    name = newName[1].toUpperCase + " " + newName[0].toLowerCase;
    return name;
}

$("#main").append(internationalizeButton);

function pro() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(title);

        // OK
        var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(dates);

        var description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(description);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formatImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formatImage);
            }
        }
    }
};

pro();

$("#mapDiv").append(googleMap)



//myObj = { 'country1': 'Germany', 'country2': 'Argentina' };
//for (key in myObj) {
//    if (myObj.hasOwnProperty(key)) {
//        console.log(myObj[key]);
//    }
//}