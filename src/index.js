// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Badges from "./components/Badge";
import "./global.css";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badges
    imgAvatar="http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg"
    nombreUsuario="David"
    apellidoUsuario="Flores"
    puesto="Frontend Developer"
    twitter="dfloresdev"
  />,
  container
);
