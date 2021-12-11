$(document).ready(function() {
    for(let i = 0; i < 24; ++i){
        if(i%4 == 0){
            $('#prova').append(
                `<a class="feina">About</a>`);
        }else{
            $('#prova').append(
                `<a>About</a>`);
        }
    
    }
});

function getInputValue() {
    let inputVal = document.getElementById("inputId").value;
    //guardar inputVal a localStorage
  }