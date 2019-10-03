'strict mode'

$("#Titulo").html(convertirTextoAHTML(titulo.texto));
$("#ContadorTitulo").html(`( ${obtenerNumeroPalabras($("#Titulo").text())} palabras )`);
$("#ProblemaGeneral").html(convertirTextoAHTML(problema.general));
$("#ObjetivoGeneral").html(convertirTextoAHTML(objetivo.general));
$("#HipotesisGeneral").html(convertirTextoAHTML(hipotesis.general));
$("#VariableDependiente").html(`Dependiente<hr>${convertirTextoAHTML([parametro.variable.dependiente])}`);
$("#ObjetivoEspecifico1").html(convertirTextoAHTML(objetivo.especifico[0]));
$("#VariableIndependiente").html(`Independiente<hr>${convertirTextoAHTML([parametro.variable.independiente])}`);


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