/// <reference path="jQuery.js" />

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

var wokr = {
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
            "title": "gestão de vendas",
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
            "description": "",
            "images" : "images/fry.jpg"
        }
    ]
}

var bio = {
    "name": "Daniel V.",
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