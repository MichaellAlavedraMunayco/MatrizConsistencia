const parametro = {
    variable: {
        independiente: {
            id: "variableIndependiente",
            texto: "Modelo Proactivo de Analítica de Negocios",
            color: color.variableIndependiente,
            indicador: [
                {
                    texto: "Exactitud",
                    color: color.variableIndependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tecnica: "Cálculo matemático",
                    instrumento: "Matriz de confusión"
                },
                {
                    texto: "Sensibilidad",
                    color: color.variableIndependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tecnica: "Cálculo matemático",
                    instrumento: "Matriz de confusión"
                },
                {
                    texto: "Precisión",
                    color: color.variableIndependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tecnica: "Cálculo matemático",
                    instrumento: "Matriz de confusión"
                }
            ]
        },
        dependiente: {
            id: "variableDependiente",
            texto: "Proceso de Toma de Decisiones",
            color: color.variableDependiente,
            indicador: [
                {
                    texto: "Eficacia de las decisiones tomadas",
                    color: color.variableDependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tecnica: "Encuesta",
                    instrumento: "Cuestionario"
                }
            ]
        }
    },
    limitacion: {
        geografica: {
            id: "limitacionGeografica",
            texto: "Caja Municipal de Ahorro y Crédito de Maynas SA",
            color: color.limitacionGeografica
        },
        temporal: {
            id: "limitacionTemporal",
            texto: "Período 2019-2020",
            color: color.limitacionTemporal
        }
    }
};