$(function () {
    $("#matrizConsistencia").html(construirTabla(parametro, matriz, reglamento));

    $('body').on('focus', '[contenteditable]', function () {
        // objeto seleccionado
        console.log($(this));
    }).on('paste input', '[contenteditable]', function () {
        // objeto en edicion
        // vd.texto = $(this).text();
        console.log($(this).find("#" + vi.id).text());
        console.log($(this).find("#" + vd.id).text());

    }).focusout(function () {
        $("#matrizConsistencia").html(construirTabla(parametro, matriz, reglamento));
    });
});

function construirTabla(parametro, matriz, reglamento) {
    var tableHTML = new String('');
    var numIndicadoresIndependientes = vi.indicador.length;
    var numIndicadoresDependientes = vd.indicador.length;

    tableHTML +=
        `<h5 class="text-center" style="color: #000" contenteditable="true" spellcheck="true">${convertirTextoAHTML(matriz.titulo.texto)}
        <span class="text-center small" style="color: #666"> (${obtenerNumeroPalabras(convertirTextoAString(matriz.titulo.texto))})</span></h5>
        <table class="table table-sm my-table-hover table-bordered">
            <thead>
                <tr>
                    <th style="border: none;"></th>
                    <th id="ProblemaTooltip" class="text-center" style="border-left: none; border-right: none; width: 15%">Problema</th>
                    <th id="ObjetivoTooltip" class="text-center" style="border-left: none; border-right: none; width: 15%">Objetivos</th>
                    <th id="HipotesisTooltip" class="text-center" style="border-left: none; border-right: none; width: 15%">Hipótesis</th>
                    <th id="VariablesTooltip" class="text-center" style="border-left: none; border-right: none; width: 5%">Variables</th>
                    <th class="text-center" style="border-left: none; border-right: none; width: 10%">Indicadores</th>
                    <th class="text-center" style="border-left: none; border-right: none">Valores</th>
                    <th class="text-center" style="border-left: none; border-right: none">Unidad</th>
                    <th class="text-center" style="border-left: none; border-right: none">Tipo</th>
                    <th class="text-center" style="border-left: none; border-right: none">Técnica</th>
                    <th class="text-center" style="border-left: none; border-right: none">Instrumenro</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th rowspan="${numIndicadoresIndependientes}" class="rotate"><div class="verticalText">General</div></th>
                    <td class="align-middle" rowspan="${numIndicadoresIndependientes}">${convertirTextoAHTML(matriz.problema.general)}</td>
                    <td class="align-middle" rowspan="${numIndicadoresIndependientes}">${convertirTextoAHTML(matriz.objetivo.general)}</td>
                    <td class="align-middle" rowspan="${numIndicadoresIndependientes}">${convertirTextoAHTML(matriz.hipotesis.general)}</td>
                    <td rowspan="${numIndicadoresIndependientes}">Independiente<hr>${convertirTextoAHTML([vi])}</td>`;
    for (let index = 0; index < numIndicadoresIndependientes; index++) {
        const indicador = vi.indicador[index];
        if (index > 0) {
            tableHTML += `<tr>`;
        }
        tableHTML += `<td class="align-middle">${convertirTextoAHTML([indicador])}</td>`;
        tableHTML += `<td class="align-middle">${indicador.valor}</td>`;
        tableHTML += `<td class="align-middle">${indicador.unidad}</td>`;
        tableHTML += `<td class="align-middle">${indicador.tipo}</td>`;
        tableHTML += `<td class="align-middle">${indicador.tecnica}</td>`;
        tableHTML += `<td class="align-middle">${indicador.instrumento}</td>`;
    }
    tableHTML += `</tr>
    <tr style="height: 10px"></tr>
    <tr>
        <th rowspan="${numIndicadoresDependientes}" class="rotate divider"><div class="verticalText">Específicos</div></th>`;
    for (let index = 0; index < numIndicadoresDependientes; index++) {
        const indicador = vd.indicador[index];
        const problemaEspecifico = matriz.problema.especifico[index];
        const objetivoEspecifico = matriz.objetivo.especifico[index];
        const hipotesisEspecifico = matriz.hipotesis.especifico[index];
        if (index > 0) {
            tableHTML += `<tr>`;
        }
        tableHTML += `<td class="align-middle">${convertirTextoAHTML(problemaEspecifico)}</td>
                    <td class="align-middle">${convertirTextoAHTML(objetivoEspecifico)}</td>
                    <td class="align-middle">${convertirTextoAHTML(hipotesisEspecifico)}</td>`;
        if (index == 0) {
            tableHTML += `<td rowspan="${numIndicadoresDependientes}">Dependiente<hr>${convertirTextoAHTML([vd])}</td>`;
        }
        tableHTML += `
            <td class="align-middle">${convertirTextoAHTML([indicador])}</td>
            <td class="align-middle">${indicador.valor}</td>
            <td class="align-middle">${indicador.unidad}</td>
            <td class="align-middle">${indicador.tipo}</td>
            <td class="align-middle">${indicador.tecnica}</td>
            <td class="align-middle">${indicador.instrumento}</td>
        </tr>`;
    }
    tableHTML += `</tbody></table>
        <table class="table table-sm my-table-hover table-bordered">
            <thead>
                <tr><th id="MetodologiaTooltip" colspan="5" class="text-center">Metodología</th></tr>
                <tr>
                    <th class="text-center" style="border-left: none; border-right: none;">Material</th>
                    <th class="text-center" style="border-left: none; border-right: none;">Método</th>
                    <th class="text-center" style="border-left: none; border-right: none;">Procedimientos</th>
                    <th class="text-center" style="border-left: none; border-right: none;">Técnica</th>
                    <th class="text-center" style="border-left: none; border-right: none;">Instrumento</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td>
                        <b>Población</b>
                        <hr style="margin:0">
                        Usuarios del ${convertirTextoAHTML([vd])}
                        <br><br><b>Delimitación geográfica</b>
                        <hr style="margin:0">
                        Empresas clientes de la ${convertirTextoAHTML([parametro.limitacion.geografica])}
                        <br><br><b>Delimitación temporal</b>
                        <hr style="margin:0">
                        Durante el ${convertirTextoAHTML([parametro.limitacion.temporal])}
                        <br><br><b>Muestra</b>
                        <hr style="margin:0">
                        N = Población: 52<br>
                        Z = Porcentaje de confianza (95%): 1,96<br>
                        p = Variabilidad positiva: 0,6<br>
                        q = Variabilidad negativa: 0,4<br>
                        E = Porcentaje de error: 0,05<br>
                        n = (Z*Z*p*q*N)/((N-1)*E*E+Z*Z*p*q) = 46
                    </td>
                    <td>
                        <b>Tipo de investigación</b>
                        <hr style="margin:0">
                        Investigación científica aplicada
                        <br><br><b>Diseño de investigación</b>
                        <hr style="margin:0">
                        Experimental
                        <br>CS <i class="fas fa-long-arrow-alt-right"></i> IV <i class="fas fa-long-arrow-alt-right"></i> FS
                        <br>CS = Evaluación inicial del ${convertirTextoAHTML([vd])}
                        <br>IV = Implementación del ${convertirTextoAHTML([vi])}
                        <br>FS = Evaluación final del ${convertirTextoAHTML([vd])}
                        <br><br><b>Método de investigación</b>
                        <hr style="margin:0">
                        Deductivo
                    </td>
                    <td>
                        1. Elaboración de cuestionarios
                        <br>2. Aplicar cuestionarios a la muestra
                        <br>3. Recopilar y procesar resultados
                        <br>4. Desarrollar la solución propuesta
                        <br>4.1. Prototipar
                        <br>4.2. Analizar
                        <br>4.3. Diseñar
                        <br>4.4. Implementar
                        <br>4.5. Testear
                        <br>4.6. Desplegar
                        <br>5. Solicitar testeo de la solución a la muestra
                        <br>6. Aplicar cuestionarios a la muestra
                        <br>7. Recopilar resultados totales
                        <br>8. Validación de hipótesis
                    </td>
                   <td></td> 
                   <td></td> 
                </tr>
            </tbody>
        </table>
        <script>
            tippy('#ProblemaTooltip', {
                content: '${reglamento.problema.texto}',
                interactive: true
            });
            tippy('#ObjetivoTooltip', {
                content: '${reglamento.objetivo.texto}',
                interactive: true
            });
            tippy('#HipotesisTooltip', {
                content: '${reglamento.hipotesis.texto}',
                interactive: true
            });
            tippy('#VariablesTooltip', {
                content: '${reglamento.variable.texto}',
                interactive: true
            });
            tippy('#MetodologiaTooltip', {
                content: '${reglamento.metodologia.texto}',
                interactive: true
            });
        </script>`;
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

