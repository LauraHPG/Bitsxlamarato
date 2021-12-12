/**
 *Progama fet per Black Keys
 *Ignasi Juez
 *Laura Hui Pérez
 *Pere Carrillo
 *Sergio Blanco
 */
 
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
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.padding = "25%";
}

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function horari(aa, mm, dd) {
    $('#tasques0').html("");
    $('#tasques1').html("");
    $('#tasques2').html("");
    $('#tasques3').html("");
    $('#tasques4').html("");

    let nhores = 4;

    let hor = 0;
    let examens = [];

    ++dd;
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

    let id = aa + "-";
    if (mm < 10) {
        id += "0";
    }
    id += mm + "-";

    if (dd < 10) {
        id += "0";
    }
    id += dd;

    let tasques = JSON.parse(localStorage.getItem(id));
    console.log(tasques);
    if (tasques != null) {
        for (let i = 0; i < tasques.length; ++i) {
            if (tasques[i] != null) {
                let tas = "#tasques" + hor;
                $(tas).append(
                    `<p>${tasques[i].nom}<br></p>`);
                hor = (hor+1)%nhores;
            }
        }
    }

    let aa1 = aa;
    let mm1 = mm;
    let dd1 = dd;

    let aa2 = aa;
    let mm2 = mm;
    let dd2 = dd;

    let aa3 = aa;
    let mm3 = mm;
    let dd3 = dd;


    //Examens
    for (var i = 2; i <= 7; ++i) {
        ++dd;

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

        let id = aa + "-";
        if (mm < 10) {
            id += "0";
        }
        id += mm + "-";

        if (dd < 10) {
            id += "0";
        }
        id += dd;

        let tasques = JSON.parse(localStorage.getItem(id));
        console.log(tasques);
        if (tasques != null) {
            for (let i = 0; i < tasques.length; ++i) {
                if (tasques[i] != null && tasques[i].tipus == 1) {
                    let tas = "#tasques" + hor;
                    $(tas).append(
                        `<p>${tasques[i].nom}<br></p>`);
                    hor = (hor+1)%nhores;
                }
            }
        }
    }
    //Treball en grup
    for (var i = 2; i <= 7; ++i) {
        ++dd1;

        if((mm1==1 || mm1==3 || mm1==5 || mm1==7 || mm1==8 || mm1==10 || mm1==12) && dd1==32){
            ++mm1;
            dd1=1;
        }
        else if(( mm1==4 || mm1==6 || mm1==9 || mm1==11) && dd1==31){
            ++mm1;
            dd1=1;
        }
        else if(!(aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm1==2 && dd1==29){
            ++mm1;
            dd1=1;
        }
        else if((aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm1==2 && dd1==30){
            ++mm1;
            dd1=1;
        }
        if(mm1==13){
            ++aa1;
            mm1=1;
        }

        let id = aa1 + "-";
        if (mm1 < 10) {
            id += "0";
        }
        id += mm1 + "-";

        if (dd1 < 10) {
            id += "0";
        }
        id += dd1;

        let tasques = JSON.parse(localStorage.getItem(id));
        console.log(tasques);
        if (tasques != null) {
            for (let i = 0; i < tasques.length; ++i) {
                if (tasques[i] != null && tasques[i].tipus == 2) {
                    let tas = "#tasques" + hor;
                    $(tas).append(
                        `<p>${tasques[i].nom}<br></p>`);
                    hor = (hor+1)%nhores;
                }
            }
        }
    }
    //Practica
    for (var i = 2; i <= 7; ++i) {
        ++dd2;

        if((mm2==1 || mm2==3 || mm2==5 || mm2==7 || mm2==8 || mm2==10 || mm2==12) && dd2==32){
            ++mm2;
            dd2=1;
        }
        else if(( mm2==4 || mm2==6 || mm2==9 || mm2==11) && dd2==31){
            ++mm2;
            dd2=1;
        }
        else if(!(aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm2==2 && dd2==29){
            ++mm2;
            dd2=1;
        }
        else if((aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm2==2 && dd2==30){
            ++mm2;
            dd2=1;
        }
        if(mm2==13){
            ++aa2;
            mm2=1;
        }

        let id = aa2 + "-";
        if (mm2 < 10) {
            id += "0";
        }
        id += mm2 + "-";

        if (dd2 < 10) {
            id += "0";
        }
        id += dd2;

        let tasques = JSON.parse(localStorage.getItem(id));
        console.log(tasques);
        if (tasques != null) {
            for (let i = 0; i < tasques.length; ++i) {
                if (tasques[i] != null && tasques[i].tipus == 3) {
                    let tas = "#tasques" + hor;
                    $(tas).append(
                        `<p>${tasques[i].nom}<br></p>`);
                    hor = (hor+1)%nhores;
                }
            }
        }
    }
    //Deures
    for (var i = 2; i <= 7; ++i) {
        ++dd3;

        if((mm3==1 || mm3==3 || mm3==5 || mm3==7 || mm3==8 || mm3==10 || mm3==12) && dd3==32){
            ++mm3;
            dd3=1;
        }
        else if(( mm3==4 || mm3==6 || mm3==9 || mm3==11) && dd3==31){
            ++mm3;
            dd3=1;
        }
        else if(!(aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm3==2 && dd3==29){
            ++mm3;
            dd3=1;
        }
        else if((aa%100 == 0 && (aa/100)%4 == 0 || aa%100 != 0 && aa%4 == 0) && mm3==2 && dd3==30){
            ++mm3;
            dd3=1;
        }
        if(mm3==13){
            ++aa3;
            mm3=1;
        }

        let id = aa3 + "-";
        if (mm3 < 10) {
            id += "0";
        }
        id += mm3 + "-";

        if (dd3 < 10) {
            id += "0";
        }
        id += dd3;

        let tasques = JSON.parse(localStorage.getItem(id));
        console.log(tasques);
        if (tasques != null) {
            for (let i = 0; i < tasques.length; ++i) {
                if (tasques[i] != null && tasques[i].tipus == 4) {
                    let tas = "#tasques" + hor;
                    $(tas).append(
                        `<p>${tasques[i].nom}<br></p>`);
                    hor = (hor+1)%nhores;
                }
            }
        }
    }

}

function show_info(aa, mm, dd){

    $('#llista-tasques').html("");

    let id = aa + "-";
    if (mm < 10) {
        id += "0";
    }
    id += mm + "-";

    if (dd < 10) {
        id += "0";
    }
    id += dd;

    //alert(id2);
    var feines = JSON.parse(localStorage.getItem(id));
    console.log(id, feines);
    if (feines != null) {
    for (let i = 0; i < feines.length; ++i) {
        $('#llista-tasques').append(
            `<p>${feines[i].nom}<br></p>`);
    }
    }
    horari(aa, mm, dd);
}


function guardarInfo(){
    let nom = document.getElementById("inputId1").value;
    let data = document.getElementById("inputId2").value;
    let tipus = document.getElementById("form").value;

    var tasca = {'nom': nom, 'tipus': tipus};

    let vec = [];

    let x = localStorage.getItem(data);
    if (x != null) {
        let y = (JSON.parse(x));
        y.push(tasca);
        vec = y;
    }
    else {
        vec.push(tasca);
    }
    localStorage.setItem(data, JSON.stringify(vec));

    document.getElementById("myForm").reset();
    closeNav();
}

function esborrarAll(){
localStorage.clear();
window.location.reload();
}
