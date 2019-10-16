'strict mode'

const matriz = {
    titulo: {
        texto: [parametro.variable.independiente, " para la ", parametro.variable.dependiente, " de la ", parametro.poblacion, " en el ", parametro.periodo]
    },
    problema: {
        general: ["¿De qué manera se puede lograr la ", parametro.variable.dependiente, " de la ", parametro.poblacion, " en el ", parametro.periodo, " con el uso de las Tecnologías de Información?"],
        especifico: [
            ["¿De qué manera se puede mejorar la ", parametro.variable.dependiente.indicador[0], " de las ", parametro.poblacion, " en el ", parametro.periodo, "?"],
            ["¿De qué manera se puede mejorar la ", parametro.variable.dependiente.indicador[1], " de las ", parametro.poblacion, " en el ", parametro.periodo, "?"],
            ["¿De qué manera se puede mejorar la ", parametro.variable.dependiente.indicador[2], " de las ", parametro.poblacion, " en el ", parametro.periodo, "?"],
            ["¿De qué manera se puede mejorar la ", parametro.variable.dependiente.indicador[3], " de las ", parametro.poblacion, " en el ", parametro.periodo, "?"],
            ["¿De qué manera las ", parametro.poblacion, " pueden conseguir ", parametro.variable.dependiente.indicador[4], " en el ", parametro.periodo, "?"]
        ]
    },
    objetivo: {
        general: ["Lograr la ", parametro.variable.dependiente, " de la ", parametro.poblacion, " en el ", parametro.periodo, " con la ", parametro.variable.independiente],
        especifico: [
            ["Mejorar la ", parametro.variable.dependiente.indicador[0], " de las ", parametro.poblacion, " en el ", parametro.periodo, " con ", parametro.variable.independiente],
            ["Mejorar la ", parametro.variable.dependiente.indicador[1], " de las ", parametro.poblacion, " en el ", parametro.periodo, " con ", parametro.variable.independiente],
            ["Mejorar la ", parametro.variable.dependiente.indicador[2], " de las ", parametro.poblacion, " en el ", parametro.periodo, " con ", parametro.variable.independiente],
            ["Mejorar la ", parametro.variable.dependiente.indicador[3], " de las ", parametro.poblacion, " en el ", parametro.periodo, " con ", parametro.variable.independiente],
            ["Ayudar a las ", parametro.poblacion, " a conseguir ", parametro.variable.dependiente.indicador[4], " en el ", parametro.periodo, " con ", parametro.variable.independiente]
        ]
    },
    hipotesis: {
        general: ["Con la ", parametro.variable.independiente, " se logra una ", parametro.variable.dependiente, " de las ", parametro.poblacion, " en el ", parametro.periodo],
        especifico: [
            ["Con ", parametro.variable.independiente, " se logra mejorar la ", parametro.variable.dependiente.indicador[0], " de las ", parametro.poblacion, " en el ", parametro.periodo],
            ["Con ", parametro.variable.independiente, " se logra mejorar la ", parametro.variable.dependiente.indicador[1], " de las ", parametro.poblacion, " en el ", parametro.periodo],
            ["Con ", parametro.variable.independiente, " se logra mejorar la ", parametro.variable.dependiente.indicador[2], " de las ", parametro.poblacion, " en el ", parametro.periodo],
            ["Con ", parametro.variable.independiente, " se logra mejorar la ", parametro.variable.dependiente.indicador[3], " de las ", parametro.poblacion, " en el ", parametro.periodo],
            ["Con ", parametro.variable.independiente, " las ", parametro.poblacion, " consiguen ", parametro.variable.dependiente.indicador[4], " en el ", parametro.periodo]
        ]

    }
};