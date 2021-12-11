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
    $('#tasques2').html("");
    $('#tasques3').html("");
    $('#tasques4').html("");
    let examens = [];
    for (var i = 1; i <= 7; ++i) {
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

        let id = aa + "-" + mm + "-" + dd;
        let tasques = JSON.parse(localStorage.getItem(id));
        console.log(tasques);
        if (tasques != null) {
            for (let i = 0; i < tasques.length; ++i) {
                if (tasques[i] != null && tasques[i].tipus == 1) {
                    let tas = "#tasques" + i;
                    $(tas).append(
                        `<p>${tasques[i].nom}<br></p>`);
                }
            }
        }
    }
}

function show_info(aa, mm, dd){

    $('#tasques').html("");
    let id = aa + "-" + mm + "-" + dd;
    //alert(id2);
    var feines = JSON.parse(localStorage.getItem(id));
    if (feines != null) {
    for (let i = 0; i < feines.length; ++i) {
        $('#tasques').append(
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
    //console.log(vec, JSON.parse(localStorage.getItem(data)));

}
/*
accedirInfo(dia){
}*/
