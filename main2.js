$(document).ready(function() {
    const d = new Date();
    let day = d.getDay(); //dia de la setmana actual
    let dd =d.getDate(); //num de mes
    let mm = d.getMonth()+1;
    let aa = d.getUTCFullYear();

    for(let i = 0; i < 50; ++i){
        if((mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12) && dd==32){
            ++mm;
            dd=1;
        }
        else if(( mm==4 || mm==6 || mm==9 || mm==11) && dd==31){
            ++mm;
            dd=1;
        }
        else if(!(aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm==2 && dd==29){
            ++mm;
            dd=1;
        }
        else if((aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm==2 && dd==30){
            ++mm;
            dd=1;
        }


        if(mm==13){
            ++aa;
            mm=1;
        }

        if(day == 0){
            $('#setmana').append(
                `<a onclick="show_info(${aa},${mm},${dd});" id ="${dd}${mm}${aa%100}">Diumenge<br>${dd}/${mm}/${aa%100} </a>`);
        }else if(day == 1){
            $('#setmana').append(
                `<a  onclick="show_info(${aa}, ${mm},${dd});" id ="${dd}${mm}${aa%100}">Dilluns<br>${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 2){
            $('#setmana').append(
                `<a onclick="show_info(${aa},${mm},${dd});" id ="${dd}${mm}${aa%100}">Dimarts<br>${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 3){
            $('#setmana').append(
                `<a onclick="show_info(${aa},${mm},${dd});" id ="${dd}${mm}${aa%100}">Dimecres<br>${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 4){
            $('#setmana').append(
                `<a onclick="show_info(${aa},${mm},${dd});" id ="${dd}${mm}${aa%100}">Dijous<br>${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 5){
            $('#setmana').append(
                `<a onclick="show_info(${aa},${mm},${dd});" id ="${dd}${mm}${aa%100}">Divendres<br>${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 6){
            $('#setmana').append(
                `<a onclick="show_info(${aa},${mm},${dd});" id ="${dd}${mm}${aa%100}">Dissabte<br>${dd}/${mm}/${aa%100}</a> `);
        }
        ++dd;
        day = (day+1)%7;
    }

});

function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("main").style.padding = "25%";
}

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function horari(aa, mm, dd) {
    $('#tasques2').html("");
    let examens = [];
    for (var i = 0; i < 6; ++i) {
        let dd2 = dd + i;
        let id3 = aa + "-" + mm + "-" + dd2 + ".2";
        let tasquesd = localStorage.getItem(id3);
        for (let j = 0; j < tasquesd.length; ++j) {
            if (tasquesd[j] == 1) {
                alert("Examen");
                $('#tasques2').append(
                    `<p>${"Examen!jaja"}<br></p>`);
            }
        }
    }
}

function show_info(aa, mm, dd){
    $('#tasques').html("");
    let id = aa + "-" + mm + "-" + dd;
    let id2 = aa + "-" + mm + "-" + dd + ".1";
    let id3 = aa + "-" + mm + "-" + dd + ".2";
    //alert(id2);
    var feines = localStorage.getItem(id2);
    var feines2 = localStorage.getItem(id3);
    //alert(feines);
    let ultim = feines[0];
    let i = 1;
    while(i < feines.length) {
        if (feines[i] == "~") {
            $('#tasques').append(
                `<p>${ultim}<br></p>`);
                ultim = "";
        }
        else {
            ultim += feines[i];
        }
        ++i;
    }
    $('#tasques').append(
        `<p>${ultim}<br></p>`);
    horari(aa, mm, dd);
}


function guardarInfo(){
    let nom = document.getElementById("inputId1").value;
    let data = document.getElementById("inputId2").value;
    let tipus = document.getElementById("form").value;

    let d = data + ".1";
    let d2 = data + ".2";
    //alert(d1);
    var x = localStorage.getItem(d);
    if (x != null) {
        nom = nom + "~" + x;
        var y = localStorage.getItem(d2);
        tipus = tipus + "~" + y;
    }
    localStorage.setItem(d, nom);
    localStorage.setItem(d2, tipus);

    let val = document.getElementById("inputId1").value;
    if (val.search("Dilluns") != -1) {

    }

}
/*
accedirInfo(dia){
}*/
