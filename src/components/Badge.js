import React from "react";
// import ReactDOM from 'react-dom';
import imgHeader from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={imgHeader} alt="logoconf" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.imgAvatar}
            alt="Avatar"
          />
          <h1>
            {this.props.nombreUsuario}
            <br />
            {this.props.apellidoUsuario}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.puesto}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platzi</div>
      </div>
    );
  }
}

export default Badge;
