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
                    <th id="ProblemaTooltip" class="text-center" style="border-left: none; border-right: none; width: 17%">Problema</th>
                    <th id="ObjetivoTooltip" class="text-center" style="border-left: none; border-right: none; width: 17%">Objetivos</th>
                    <th id="HipotesisTooltip" class="text-center" style="border-left: none; border-right: none; width: 17%">Hipótesis</th>
                    <th id="VariablesTooltip" class="text-center" style="border-left: none; border-right: none; width: 5%">Variables</th>
                    <th class="text-center" style="border-left: none; border-right: none; width: 10%">Indicadores</th>
                    <th class="text-center" style="border-left: none; border-right: none">Valores</th>
                    <th class="text-center" style="border-left: none; border-right: none">Unidad</th>
                    <th class="text-center" style="border-left: none; border-right: none">Técnica</th>
                    <th class="text-center" style="border-left: none; border-right: none">Instrumento</th>
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
            <td class="align-middle">${indicador.tecnica}</td>
            <td class="align-middle">${indicador.instrumento}</td>
        </tr>`;
    }
    tableHTML += `</tbody></table>
        <table class="table table-sm my-table-hover table-bordered">
            <thead>
                <tr><th id="MetodologiaTooltip" colspan="3" class="text-center">Metodología</th></tr>
                <tr>
                    <th class="text-center" style="border-left: none; border-right: none; width: 33.3%">Material</th>
                    <th class="text-center" style="border-left: none; border-right: none; width: 33.3%">Tipo de investigación</th>
                    <th class="text-center" style="border-left: none; border-right: none; width: 33.3%">Procedimientos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td>
                        <b>Población</b>
                        <hr style="margin:0">
                        Eventos de toma de decisiones

                        <br><br><b>Delimitación geográfica</b>
                        <hr style="margin:0">
                        ${convertirTextoAHTML([parametro.limitacion.geografica])}. Es una institución perteneciente al sistema financiero nacional con liderazgo en el sector de las microfinanzas en la Amazonía Peruana, y con alcance a otras zonas geográficas del país, integrante del Sistema de Cajas Municipales de Ahorro y Crédito del Perú (CMAC), cuyo objetivo principal es fomentar el microahorro de las familias, para intermediar los fondos captados a través del otorgamiento de préstamos, con prioridad, a los pequeños y microempresarios de la región donde desarrolla sus actividades activas y pasivas.

                        <br><br><b>Delimitación temporal</b>
                        <hr style="margin:0">
                        ${convertirTextoAHTML([parametro.limitacion.temporal])}

                        <br><br><b>Muestra</b>
                        <hr style="margin:0">
                        <b><i>No probabilístico - Consecutivo</i></b>. Se incluirán a todos los eventos de toma de decisiones disponibles para un mejor estudio.
                    </td>
                    <td>
                        <b>Según el objetivo</b>
                        <hr style="margin:0">
                        <b><i>Científica aplicada</i></b>. Centrada en encontrar mecanismos o estrategias que permitan lograr un objetivo concreto

                        <br><br><b>Según el nivel de profundización del objeto de estudio</b>
                        <hr style="margin:0">
                        <b><i>Exploratoria</i></b>. Se investigará sobre aspectos que aún no han sido analizados con profundidad 
                        <br><b><i>Explicativa</i></b>. Se determinarán las causas y consecuencias de los eventos estudiados
                        
                        <br><br><b>Según el tipo de datos empleados</b>
                        <hr style="margin:0">
                        <b><i>Cuantitativa</b></i>. Se estudiarán y analizarán los eventos a través de diferentes procedimientos basados en la medición

                        <br><br><b>Según el grado de manipulación de variables</b>
                        <hr style="margin:0">
                        <b><i>No Experimental</b></i>. Se basará en la observación de eventos no controlados
                        <div style="width: 100%; text-align: center"> EA <i class="fas fa-long-arrow-alt-right"></i> VI <i class="fas fa-long-arrow-alt-right"></i> EF</div>
                        EA = Evaluación del ${convertirTextoAHTML([vd])}
                        <br>VI = Aplicación del ${convertirTextoAHTML([vi])}
                        <br>FS = Evaluación del ${convertirTextoAHTML([vd])}
                        
                        <br><br><b>Según el estudio de inferencia</b>
                        <hr style="margin:0">
                        <b><i>Método hipotético-deductivo</i></b>. Se generarán hipótesis a partir de hechos observados, que a su vez, generarán teorías que deberán ser comprobadas mediante la experimentación

                        <br><br><b>periodo temporal en que se realiza</b>
                        <hr style="margin:0">
                        <b><i>Longitudinal</i></b>. Se realizará un seguimiento a unos mismos eventos a lo largo de un período concreto
                    </td>
                    <td>
                        <b>1. Construcción de instrumentos de evaluación</b>
                        <br><b>2. Evaluación del estado (actual)</b>
                        <br>&nbsp;&nbsp;2.1. Aplicación de los instrumentos 
                        <br>&nbsp;&nbsp;2.2. Recopilación de resultados 
                        <br>&nbsp;&nbsp;2.3. Procesamiento de resultados 
                        <br><b>3. Aplicación del modelo</b>
                        <br>&nbsp;&nbsp;3.1. Recolección de datos
                        <br>&nbsp;&nbsp;3.2. Modelado de datos
                        <br>&nbsp;&nbsp;3.3. Transformación de datos
                        <br>&nbsp;&nbsp;3.4. Preparación de datos
                        <br>&nbsp;&nbsp;3.5. Exploración visual de datos
                        <br>&nbsp;&nbsp;3.6. Desarrollo del modelo
                        <br>&nbsp;&nbsp;3.7. Aplicación del modelo
                        <br>&nbsp;&nbsp;3.8. Testeo del modelo
                        <br>&nbsp;&nbsp;3.9. Documentación de resultados
                        <br>&nbsp;&nbsp;3.10. (SI resultado es NEGATIVO) Volver al punto 1
                        <br>&nbsp;&nbsp;3.11. Despliegue del modelo
                        <br>&nbsp;&nbsp;3.12. Testeo por usuarios finales
                        <br><b>4. Evaluación del estado (futuro)</b>
                        <br>&nbsp;&nbsp;4.2. Aplicación de los instrumentos
                        <br>&nbsp;&nbsp;4.2. Recopilación de resultados 
                        <br>&nbsp;&nbsp;4.3. Procesamiento de resultados 
                        <br><b>5. Validación de hipótesis</b>
                        <br>&nbsp;&nbsp;5.1. Recopilación de resultados
                        <br>&nbsp;&nbsp;5.2. Contrastación de resultados
                        <br>&nbsp;&nbsp;5.2. Documentación de resultados
                    </td>
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

