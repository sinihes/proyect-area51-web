import React from "react";

import grifol from "../../assets/img/grifol.jpeg";
import trejo from "../../assets/img/trejo.jpg";
import aeropuerto from "../../assets/img/aeropuerto.jpeg";

import './style.css';




function Encounters() {
  return (
    <section className="section-encounters" name='sectionEncounters'>
      <article className="article-encounters">
        <h2>Caso Montserrat</h2>
        <div className="wrapper--article">
          <div className="content-img">
              <img src={grifol} alt="" />
          </div>

          <div className="content-parragraf">
            <p>
              Lo que le sucedió a José Luis Grifol en Montserrat es lo que más
              me impactó. El día 11 de cada mes acudía a Montserrat -lugar clave
              en la historia ufológica de nuestro país- asegurando ver una serie
              de luces y muchas particularidades.
            </p>
            <p>
              No solo por las luces inexplicables en compañía de centenares de
              personas, sino que él era capaz de anunciar la dirección y la
              trayectoria por la que aparecerían esas luces para que instantes
              después sucediese exactamente lo que él decía. Si sucede una vez
              puedes atribuirlo a mera casualidad.
            </p>
            <p>
              A la segunda ya te muestras reticente. Pero ya en la tercera
              ocasión y en las siguientes te plateas muchas cosas y ninguna
              basada en la casualidad. Todo aquello me hizo pensar que aquel
              hombre era capaz de visualizar algo que sucedería en el cielo
              antes que los demás.
            </p>
          </div>
        </div>
      </article>
      
<div className="bg-color-content">
      <article className="article-encounters bg-color-article">
        <h2>Caso Talavera del Real</h2>
        <div className="wrapper--article wrapper--article_reverse">
        <div className="content-img">
          <img src={trejo} alt="" />
          </div>
          <div className="content-parragraf">
            <p>
              En el caso de José Manuel Trejo sucede algo similar y es que él
              asegura haber visto una luz verde en un momento determinado. Su
              guardia era en la base de Talavera la Real, con munición real, por
              lo que cualquier granada o impacto semejante hubiese llegado hasta
              Badajoz.
            </p>
            <p>
              Trejo dice haber visto una esfera verde con un ser enorme en su
              interior, también de tonos verdes, flotando sobre el aire, al que
              dispararon más de 140 balas
            </p>
            <p>
              Esto, que sucedió en los años 70, imaginemos lo que suponía el
              manifestar haber sido testigo de una situación así y mucho más el
              tener que explicarla. Ellos tienen claro que lo que vieron no
              pertenece a este mundo.’’
            </p>
          </div>
        </div>
      </article>
      </div>
      <article className="article-encounters">
        <h2>Aeropuerto Internacional Profesor Urbano Ernesto Stumpf</h2>
        <div className="wrapper--article">
        <div className="content-img">
          <img src={aeropuerto} alt="" />
          </div>
          <div className="content-parragraf">
            <p>
              Cuando llegó a su trabajo, el 19 de mayo de 1986, en el Aeropuerto
              Internacional Profesor Urbano Ernesto Stumpf, en Sao José dos
              Campos, en el estado de Sao Paulo en Brasil, el controlador aéreo
              Sergio Mota da Silva no imaginó que esa jornada sería recordada en
              la historia de la ufología como "La Noche Oficial de los Ovnis".
            </p>
            <p>
              Ese lunes por la noche, 21 objetos voladores no identificados,
              algunos de ellos de hasta 100 metros de diámetro, fueron avistados
              por decenas de testigos, tanto civiles como militares, en cuatro
              estados: Sao Paulo, Río de Janeiro, Minas Gerais y Goiás. Solo en
              el interior del estado de Sao Paulo se registraron avistamientos
              en Caçapava, Taubaté y Mogi das Cruzes.
            </p>
            <p>
              En Guaratinguetá, también en el estado de Sao Paulo, el
              avistamiento fue colectivo, según relató el ufólogo Edison
              Boaventura Júnior, presidente del Grupo Ufológico de Guarujá
              (GUG).
            </p>
            <p>
              "Alrededor de las 20:00 horas, unos dos mil militares, entre
              cadetes y oficiales, de la Escuela de Especialistas Aeronáuticos
              (EEAR), presenciaron el fenómeno, a simple vista o con
              binoculares", afirma.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Encounters;


/* ES1900730100560612649691 */