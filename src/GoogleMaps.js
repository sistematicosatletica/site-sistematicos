import React, { Component } from 'react';
import Iframe from 'react-iframe'


class SimpleMap extends Component {

  render() {
    return (
        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15890.119728347752!2d-49.102445!3d-5.3357475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c3a10474f5199d%3A0xa762792cad7bff0b!2sUniversidade+Federal+do+Sul+e+Sudeste+do+Par%C3%A1+-+Unifesspa%2C+Campus+de+Marab%C3%A1%2C+Unidade+II!5e0!3m2!1spt-BR!2sbr!4v1564722956999!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        id="map"
        display="initial"
        frameborder="0"
        position="relative"/>
    );
  }
}
export default SimpleMap



