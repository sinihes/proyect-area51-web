import React from "react";
import "./style.css";
import abdubcion from '../../assets/img/abdubcion.jpg'

function Experiencies() {
  return (
    <section name="sectionExperience" className="section-expecience">
      <h2>ABDUCIDOS</h2>
      <h3>
        John Mooner, el ufólogo británico que fue abducido por los
        extraterrestres: "Google Earth captó mi secuestro"
      </h3>
      <div className="wrapper-parragraf-experience">
      <p>
        Su nombre es John Mooner, de origen británico y de profesión ufólogo.
        Actualmente es el investigador jefe de World Ufo Photos, una web que
        recibe fotos misteriosas de todo el mundo para investigarlas, y también
        trabaja para la Sociedad Británica de Misterios Terréstres y Aéreos
        (BEAMS, por sus siglas en inglés). Pero como toda historia, la de Mooner
        también tiene un comienzo.
      </p>
      <p>
        Newton Abott, Devon, Inglaterra. Corría el año 1993 y Mooner paseaba por
        las calles del pueblo británico a plena luz del día. Lo que no esperaba
        era que, de pronto, se plantara frente a él una criatura con alas y unos
        enormes ojos rojos. Mooner asegura que todavía se estremece cuando lo
        recuerda. Era Mothman, el hombre polilla. Este ser lanzó una enorme
        sombra negra sobre Mooner y desapareció en la distancia, sobrevolando la
        ciudad. Según cuenta el británico, se quedo en estado de shock,
        temblando y paralizado por el miedo. No fue capaz de reaccionar. Desde
        entonces, su vida cambiaría por completo.
      </p>
      <p>
        John Mooner comenzó a llevar su rutina diaria de forma completamente
        diferente a los demás. "Experimentaba fenómenos paranormales casi a
        diario", recuerda. Dice haber visto más ovnis de los que puede recordar.
      </p>
      <p>
        Cuenta Mooner que existen más especies de extraterrestres de las que
        podemos imaginar. Diferentes rasgos físicos, diferente apariencias...
        "Algunos son como insectos, otros se parecen a los grises clásicos de
        las películas e incluso algunos tienen apariencia humana", asegura el
        experto, y clasifica las "especies" más habituales:
      </p>
      </div>

      <ul className="list-container">
        <li>
          <span>Los Pleyadinos:</span> según el británico, son los que se
          asemejan a la especie humana. Provienen de otra constelación y son
          considerados "seres iluminados" que buscan el bien del planeta Tierra.
        </li>
        <li>
          <span>Los Reptilianos:</span> cuentan con un gran tamaño y, tal y como
          indica su nombre, sus características son muy similares a las de los
          reptiles.
        </li>
        <li>
          <span>Los Grises:</span> son los seres a los que se refiere el ufólogo
          como a los "clásicos". Se trata de seres delgados con la cabeza grande
          y alargada y unos enormes ojos negros. Según cuentan en el sector de
          la ufología, podrían ser los responsables de misteriosas
          desapariciones de muchas personas en el planeta.
        </li>
        <li>
          <span>Los Nibiruanos:</span> se dice que provienen del planeta Nibiru,
          cuya denominación significa "los que bajaron del cielo a la tierra".
          Son seres gigantes, similares a los dioses egipcios. Según afirman los
          ufólogos, estos seres podrían regresar al planeta en cualquier
          momento.
        </li>
      </ul>
      <p>
        Una vez definidos los pasajeros, toca preguntar por la nave. "Algunos
        ovnis son físicos, mientras otros no. He llegado a la conclusión de que
        algunas naves alienígenas pueden adoptar cualquier forma", explica
        Mooner. Por tanto, y según asegura, existirían infinitos tipos de ovnis:
        con forma de platillo, de bellota, de yunque, acampanados, sin forma,
        sólo simples destellos en forma de órbita de colores, cilíndricos y
        alargados... Y Mooner, que vigila los cielos, ha podido capturar a
        muchos de ellos en fotografías.
      </p>
      <div className="wrapper-img-experience">
      <img src={abdubcion} alt="" />
      </div>

      <p>
        Sin embargo, la vigilancia de los seres del espacio exterior no está
        exenta de peligros. Mooner asegura que lo secuestraron los
        extraterrestres, e incluso afirma que Google Earth captó el momento. "La
        aplicación me estaba dando problemas, así que busqué una opción on line
        y encontré el mapa de satélite de Google (Satdrops). Cuando descargué
        las imágenes de la web, pensé en buscar el área donde estuve el año
        pasado detectando ovnis. Lo que vi me dejó sin palabras...", cuenta.
      </p>
    </section>
  );
}

export default Experiencies;
