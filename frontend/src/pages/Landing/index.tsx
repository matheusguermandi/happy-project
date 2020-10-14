import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

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

        <a href="home">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </Content>
    </Container>
  );
};

export default Landing;
