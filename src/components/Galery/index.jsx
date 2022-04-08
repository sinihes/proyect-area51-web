import React from "react";
import {aliens} from "../../helps/aliens";
import './style.css'


function Galery() {
  return (
    <section className="section-galery" name='sectionGalery'>
      <h2>GALERIA</h2>
      <div className="wrapper-galey">
        {
          aliens.map((ele, id) =>(
            <div className="wrapper-img" key={id}>
              <img className="img-galery" src={ele.src} alt={ele.name} />
              <p className="name-galery">{ele.name}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Galery;
