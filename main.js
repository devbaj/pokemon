var output = "";
$(document).ready(function() {
    

    for(var i=1;i<=151;i++){
        output += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png'></img>"
    }
    $('body').html(output)
})