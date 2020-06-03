const parametro = {
  variable: {
    independiente: {
      id: "variableIndependiente",
      texto: "Agente de Toma de Decisiones",
      color: color.variableIndependiente,
      indicador: [
        {
          texto: "Utilidad del Servicio",
          color: color.variableIndependiente,
          valor: "[0 - 100]",
          unidad: "%",
          tecnica: "Encuesta",
          instrumento: "Cuestionario",
        }
      ],
    },
    dependiente: {
      id: "variableDependiente",
      texto: "Desempeño Organizacional",
      color: color.variableDependiente,
      indicador: [
        {
          texto: "Efectividad Organizacional",
          color: color.variableDependiente,
          valor: "[0 - 100]",
          unidad: "%",
          tecnica: "Observación",
          instrumento: "Software",
        },
      ],
    },
  },
  limitacion: {
    geografica: {
      id: "limitacionGeografica",
      texto: "Caja Municipal de Maynas SA",
      color: color.limitacionGeografica,
    },
    temporal: {
      id: "limitacionTemporal",
      texto: "Período 2019-2020",
      color: color.limitacionTemporal,
    },
  },
};
