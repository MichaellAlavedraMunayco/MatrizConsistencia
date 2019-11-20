const parametro = {
    variable: {
        independiente: {
            id: "variableIndependiente",
            texto: "Modelo Proactivo de Analítica de Negocios",
            color: color.variableIndependiente,
            indicador: [
                {
                    texto: "Eficiencia en la Captura de Datos",
                    color: color.variableIndependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tipo: "Cuantitativa",
                    tecnica: "Método Delphi",
                    instrumento: "Cuestionario"
                },
                {
                    texto: "Eficacia en el Procesamiento de Datos",
                    color: color.variableIndependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tipo: "Cuantitativa",
                    tecnica: "Método Delphi",
                    instrumento: "Cuestionario"
                },
                {
                    texto: "Efectividad en la Entrega de Información",
                    color: color.variableIndependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tipo: "Cuantitativa",
                    tecnica: "Método Delphi",
                    instrumento: "Cuestionario"
                }
            ]
        },
        dependiente: {
            id: "variableDependiente",
            texto: "Sistema de Información 'Eficientis Balanced Scorecard'",
            color: color.variableDependiente,
            indicador: [
                {
                    texto: "Dinamicidad de la Visualización de Datos",
                    color: color.variableDependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tipo: "Cuantitativa",
                    tecnica: "Método TOPSIS",
                    instrumento: "Cuestionario"
                },
                {
                    texto: "Capacidad Funcional Analítica",
                    color: color.variableDependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tipo: "Cuantitativa",
                    tecnica: "Método TOPSIS",
                    instrumento: "Cuestionario"
                },
                {
                    texto: "Grado de Inteligencia de Informes",
                    color: color.variableDependiente,
                    valor: "[0 - 100]",
                    unidad: "%",
                    tipo: "Cuantitativa",
                    tecnica: "Método TOPSIS",
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