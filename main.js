$(document).ready(function() {
    const d = new Date();
    let day = d.getDay(); //dia de la setmana actual
    let dd =d.getDate(); //num de mes
    let mm = d.getMonth();
    let aa = d.getUTCFullYear();
    
    for(let i = 0; i < 50; ++i){
        
        if(day == 0){
            $('#prova').append(
                `<a>Diumenge</a>`);
        }else if(day == 1){
            $('#prova').append(
                `<a>Dilluns</a>`);
        }else if(day == 2){
            $('#prova').append(
                `<a>Dimarts</a>`);
        }else if(day == 3){
            $('#prova').append(
                `<a>Dimecres</a>`);
        }else if(day == 4){
            $('#prova').append(
                `<a>Dijous</a>`);
        }else if(day == 5){
            $('#prova').append(
                `<a>Divendres</a>`);
        }else if(day == 6){
            $('#prova').append(
                `<a>Dissabte</a>`);
        }

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

