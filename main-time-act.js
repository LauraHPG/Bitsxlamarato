$(document).ready(function() {
    const d = new Date();
    let day = d.getDay(); //dia de la setmana actual
    let dd =d.getDate(); //num de mes
    let mm = d.getMonth()+1;
    let aa = d.getUTCFullYear();
    
    for(let i = 0; i < 50; ++i){
        if(((mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12) && dd==32) || (mm==2 && dd==29)){
            ++mm;
            dd=1;
        }
        else if(( mm==4 || mm==6 || mm==9 || mm==11) && dd==31){
            ++mm;
            dd=1;
        }
        if(mm==13){
            ++aa;
            mm=1;
        }

        if(day == 0){
            $('#prova').append(
                `<a>Diumenge ${dd}/${mm}/${aa%100} </a>`);
        }else if(day == 1){
            $('#prova').append(
                `<a>Dilluns ${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 2){
            $('#prova').append(
                `<a>Dimarts ${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 3){
            $('#prova').append(
                `<a>Dimecres ${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 4){
            $('#prova').append(
                `<a>Dijous ${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 5){
            $('#prova').append(
                `<a>Divendres ${dd}/${mm}/${aa%100}</a> `);
        }else if(day == 6){
            $('#prova').append(
                `<a>Dissabte ${dd}/${mm}/${aa%100}</a> `);
        }
        ++dd;
        day = (day+1)%7;
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

