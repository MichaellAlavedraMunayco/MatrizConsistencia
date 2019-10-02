'strict mode'

$("#Titulo").html(convertirTextoAHTML(titulo.texto));
$("#ContadorTitulo").html(`( ${obtenerNumeroPalabras($("#Titulo").text())} palabras )`);
$("#ProblemáticaGeneral").html(convertirTextoAHTML(problematica.general));


function convertirTextoAHTML(arrayText) {
    var htmlTransformado = new String();
    arrayText.forEach(textOrObject => {
        if (typeof textOrObject === "object") {
            htmlTransformado += `<b style="color: ${textOrObject.color}">${textOrObject.texto}</b>`;
        }
        if (typeof textOrObject === "string") {
            htmlTransformado += textOrObject;
        }
    });
    return htmlTransformado;
};

function obtenerNumeroPalabras(text) {
    return text.split(" ").length;
}