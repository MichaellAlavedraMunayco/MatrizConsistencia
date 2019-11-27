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
                },
                {
                    texto: "Puntuación F1",
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
            texto: "Sistema de Información 'Eficientis Balanced Scorecard'",
            color: color.variableDependiente,
            indicador: [
                {
                    texto: "Grado de Inteligencia",
                    color: color.variableDependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tecnica: "Encuesta",
                    instrumento: "Cuestionario"
                },
                {
                    texto: "Toma de Decisiones",
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
            texto: "Compañía 'Instrategy Management Consulting'",
            color: color.limitacionGeografica
        },
        temporal: {
            id: "limitacionTemporal",
            texto: "Período 2019-2020",
            color: color.limitacionTemporal
        }
    }
};