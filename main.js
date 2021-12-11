$(document).ready(function() {
    for(let i = 0; i < 50; ++i){
        if(i%4 == 0){
            $('#prova').append(
                `<a class="feina">About</a>`);
        }else{
            $('#prova').append(
                `<a>About</a>`);
        }
    
    }
});
