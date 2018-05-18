function Siguiente() {
    var name= document.getElementById('name').value;
    console.log(name)
    document.getElementById('contUser').innerHTML = '<p>' + 'Bienvenida '+ name + '</p>';
}

    var wantToPlay = prompt("¿quieres jugar? s/n");
    if (wantToPlay.toLowerCase() == "s") {
        var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }

        var answer2 = prompt("¿hay laboratoria en concepción? s/n");
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
    } else {
        document.getElementById("warningMessage").innerText = "Bueno Chao";
    }
}