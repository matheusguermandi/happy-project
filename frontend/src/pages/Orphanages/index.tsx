import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import localMarkerImg from '../../assets/local-marker.svg';

import { Container } from './styles';

const Orphanages: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={localMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Rio Claro</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.6603171, -46.6937747]}
        zoom={16}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default Orphanages;
