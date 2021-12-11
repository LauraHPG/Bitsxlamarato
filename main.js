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
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("inputId").value;
    // Displaying the value
    alert(inputVal);
  }