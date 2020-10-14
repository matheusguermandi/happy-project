import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div>
          <strong>Bauru</strong>
          <span>São Paulo</span>
        </div>

        <Link to="home">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Content>
    </Container>
  );
};

export default Landing;
