const p = parametro;
const vi = p.variable.independiente;
const vd = p.variable.dependiente;
const lg = p.limitacion.geografica;
const lt = p.limitacion.temporal;

const matriz = {
  titulo: {
    texto: ["Aplicación de un ", vi, " en la Gestión del ", vd, " de la ", lg, " en el ", lt],
  },
  problema: {
    general: [
      "¿Cómo las Tecnologías de Información pueden mejorar el ",
      vd,
      " de la ",
      lg,
      " en el ",
      lt,
      "?",
    ],
    especifico: [["¿Cómo mejorar la ", vd.indicador[0], " de la ", lg, " en el ", lt, "?"]],
  },
  objetivo: {
    general: [
      "Validar que el ",
      vi,
      " mejora el ",
      vd,
      " de la ",
      lg,
      " en el ",
      lt,
    ],
    especifico: [
      ["Validar que el ", vi, " mejora la ", vd.indicador[0], " de la ", lg, " en el ", lt,],
    ],
  },
  hipotesis: {
    general: ["El ", vi, " mejorará el ", vd, " de la ", lg, " en el ", lt],
    especifico: [["El ", vi, " mejorará la ", vd.indicador[0], " de la ", lg, " en el ", lt,]],
  },
};

const reglamento = {
  problema: {
    texto:
      "En la formulación del problema, se ha considerado la frase interrogativa, las variables, la población, espacio y tiempo",
  },
  objetivo: {
    texto:
      "Los objetivos generales contienen las variables de estudio y su formulación se interrelaciona estrechamente con la formulación del problema. Los objetivos específicos precisan en términos conductuales, las acciones y operaciones necesarias para el logro del objetivo general.",
  },
  hipotesis: {
    texto:
      "La hipótesis contiene las variables de estudio y responde tentativamente al problema planteado.",
  },
  variable: {
    texto:
      "Define operacionalmente las variables, es decir, traducir los conceptos hipotéticos a unidades de medición (Indicadores) e Identifica el instrumento de recolección.",
  },
  metodologia: {
    texto:
      "Precisa la población, el tipo de muestreo y el tamaño de la muestra.Establece los criterios de inclusión y exclusión. El diseño está planteado en forma clara y precisa, y es adecuado a la solución del problema. Las técnicas e instrumentos señalados son adecuados al tipo de investigación realizada.",
  },
};
