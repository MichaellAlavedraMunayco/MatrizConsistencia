'strict mode'
const p = parametro;
const vi = p.variable.independiente;
const vd = p.variable.dependiente;
const lg = p.limitacion.geografica;
const lt = p.limitacion.temporal;

const matriz = {
    titulo: {
        texto: ["Diseño de un ", vi, " para mejorar el ", vd, " de la ", lg, " en el ", lt]
    },
    problema: {
        general: ["¿Cómo mejorar el ", vd, " de la ", lg, " en el ", lt, " con ayuda de las Tecnologías de Información?"],
        especifico: [
            ["¿Cómo mejorar la ", vd.indicador[0], " del ", vd, " de la ", lg, " en el ", lt, "?"],
            ["¿Cómo mejorar la ", vd.indicador[1], " del ", vd, " de la ", lg, " en el ", lt, "?"],
            ["¿Cómo mejorar el ", vd.indicador[2], " del ", vd, " de la ", lg, " en el ", lt, "?"]
        ]
    },
    objetivo: {
        general: ["Desarrollar un ", vi, " para mejorar el ", vd, " de la ", lg, " en el ", lt],
        especifico: [
            ["Mejorar la ", vd.indicador[0], " del ", vd, " de la ", lg, " en el ", lt],
            ["Mejorar la ", vd.indicador[1], " del ", vd, " de la ", lg, " en el ", lt],
            ["Mejorar el ", vd.indicador[2], " del ", vd, " de la ", lg, " en el ", lt]
        ]
    },
    hipotesis: {
        general: ["El ", vi, " impactará significativamente en el ", vd, " de la ", lg, " en el ", lt],
        especifico: [
            ["El ", vi, " mejorará la ", vd.indicador[0], " del ", vd, " de la ", lg, " en el ", lt],
            ["El ", vi, " mejorará la ", vd.indicador[1], " del ", vd, " de la ", lg, " en el ", lt],
            ["El ", vi, " mejorará el ", vd.indicador[2], " del ", vd, " de la ", lg, " en el ", lt]
        ]

    }
};