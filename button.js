// Función para redirigir a la URL deseada
function redirectToURL(url) {
    window.open(url,'_blank');
}

// Asociar la función a los botones
document.getElementById("htmlButton").addEventListener("click", function() {
    redirectToURL("https://www.youtube.com/watch?v=UB1O30fR-EE");
});

document.getElementById("cssButton").addEventListener("click", function() {
    redirectToURL("https://www.youtube.com/watch?v=yfoY53QXEnI");
});

document.getElementById("jsButton").addEventListener("click", function() {
    redirectToURL("https://www.youtube.com/watch?v=hdI2bqOjy3c");
});

document.getElementById("fcaButton").addEventListener("click", function() {
    redirectToURL("https://suayedfca.unam.mx");
});
