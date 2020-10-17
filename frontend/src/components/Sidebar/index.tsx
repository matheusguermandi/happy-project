import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import localMarkerImg from '../../assets/local-marker.svg';

import { Aside } from './styles';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <Aside>
      <img src={localMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  );
};

export default Sidebar;
