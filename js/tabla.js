'strict mode'

$(function () {
    $("#matrizConsistencia").html(construirTabla(parametro, matriz));

    $('body').on('focus', '[contenteditable]', function () {
        // objeto seleccionado
        console.log($(this));
    }).on('paste input', '[contenteditable]', function () {
        // objeto en edicion
        // parametro.variable.dependiente.texto = $(this).text();
        console.log($(this).find("#" + parametro.variable.independiente.id).text());
        console.log($(this).find("#" + parametro.variable.dependiente.id).text());

    }).focusout(function () {
        $("#matrizConsistencia").html(construirTabla(parametro, matriz));
    });
});

function construirTabla(parametro, matriz) {
    var tableHTML = new String();
    var numIndicadoresIndependientes = parametro.variable.independiente.indicador.length;
    var numIndicadoresDependientes = parametro.variable.dependiente.indicador.length;

    tableHTML +=
        `<h5 class="text-center" style="color: #afafaf" contenteditable="true" spellcheck="true">${convertirTextoAHTML(matriz.titulo.texto)}</h5>
        <h6 class="text-center" style="color: #666">( ${obtenerNumeroPalabras(convertirTextoAString(matriz.titulo.texto))} palabras )</h6>
        <table class="table table-sm my-table-hover table-bordered">
            <thead>
                <tr>
                    <th style="border: none;"></th>
                    <th class="text-center" style="border-left: none; border-right: none">Problema</th>
                    <th class="text-center" style="border-left: none; border-right: none">Objetivos</th>
                    <th class="text-center" style="border-left: none; border-right: none">Hipótesis</th>
                    <th class="text-center" style="border-left: none; border-right: none">Variables</th>
                    <th class="text-center" style="border-left: none; border-right: none">Indicadores</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowspan="${numIndicadoresIndependientes}" class="rotate"><div class="verticalText">General</div></th>
                    <td rowspan="${numIndicadoresIndependientes}">${convertirTextoAHTML(matriz.problema.general)}</td>
                    <td rowspan="${numIndicadoresIndependientes}">${convertirTextoAHTML(matriz.objetivo.general)}</td>
                    <td rowspan="${numIndicadoresIndependientes}">${convertirTextoAHTML(matriz.hipotesis.general)}</td>
                    <td rowspan="${numIndicadoresIndependientes}">Independiente<hr>${convertirTextoAHTML([parametro.variable.independiente])}</td>`;
    for (let index = 0; index < numIndicadoresIndependientes; index++) {
        if (index > 0) {
            tableHTML += `<tr>`;
        }
        tableHTML += `<td>${convertirTextoAHTML([parametro.variable.independiente.indicador[index]])}</td>`;
    }
    tableHTML += `</tr>
    <tr>
        <th rowspan="${numIndicadoresDependientes}" class="rotate"><div class="verticalText">Específicos</div></th>`;
    for (let index = 0; index < numIndicadoresDependientes; index++) {
        const indicador = [parametro.variable.dependiente.indicador[index]];
        const problemaEspecifico = matriz.problema.especifico[index];
        const objetivoEspecifico = matriz.objetivo.especifico[index];
        const hipotesisEspecifico = matriz.hipotesis.especifico[index];
        if (index > 0) {
            tableHTML += `<tr>`;
        }
        tableHTML += `<td>${convertirTextoAHTML(problemaEspecifico)}</td>
                    <td>${convertirTextoAHTML(objetivoEspecifico)}</td>
                    <td>${convertirTextoAHTML(hipotesisEspecifico)}</td>`;
        if (index == 0) {
            tableHTML += `<td rowspan="${numIndicadoresDependientes}">Dependiente<hr>${convertirTextoAHTML([parametro.variable.dependiente])}</td>`;
        }
        tableHTML += `
            <td>${convertirTextoAHTML(indicador)}</td>
        </tr>`;
    }
    tableHTML += `</tbody></table>`;
    return tableHTML;
}

function convertirTextoAHTML(arrayText) {
    var htmlTransformado = new String();
    arrayText.forEach(textOrObject => {
        if (typeof textOrObject === "object") {
            htmlTransformado += `<div id="${textOrObject.id}" style="color: ${textOrObject.color}; display: inline; font-weight: bold;">${textOrObject.texto}</div>`;
        }
        if (typeof textOrObject === "string") {
            htmlTransformado += textOrObject;
        }
    });
    return htmlTransformado;
}

function convertirTextoAString(arrayText) {
    var textoTransformado = new String();
    arrayText.forEach(textOrObject => {
        if (typeof textOrObject === "object") {
            textoTransformado += textOrObject.texto;
        }
        if (typeof textOrObject === "string") {
            textoTransformado += textOrObject;
        }
    });
    return textoTransformado;
}

function obtenerNumeroPalabras(text) {
    return text.split(" ").length;
}

/**
 * Syntax
 * Variable Independicnte
 * {{vi=texto}}
 * Variable Dependicnte
 * {{vd=texto}}
 * Población
 * {{po=texto}}
 * Periodo
 * {{pe=texto}}
 * @param {Array} array 
 */
function codificar(array) {

}

/**
 * Example
 * {vi=Variable Independiente} ayuda a {vd=Variable Dependiente} de los {po=Poblacion} en el {pe=Periodo}
 * @param {String} text 
 */
function decodificar(text) {
    var i = 0;
    var textToArray = [];
    var temporalString = new String();
    while (i++ == text.length - 1) {
        if (text[i] == '{') {
            temporalString += text[i];
        }
        if (text[i] == '}') {
            temporalString += text[i];
            textToArray.push(temporalString);
            temporalString = '';
        }
    }
}