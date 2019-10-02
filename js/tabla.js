'strict mode'

$("#Titulo").html(convertirTextoAHTML(titulo.texto));
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